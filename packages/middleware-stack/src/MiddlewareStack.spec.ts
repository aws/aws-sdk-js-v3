import { MiddlewareStack } from "./MiddlewareStack";
import {
  FinalizeHandlerArguments,
  InitializeMiddleware,
  FinalizeRequestMiddleware,
  BuildMiddleware,
  InitializeHandlerOutput,
  DeserializeHandlerArguments,
  MiddlewareType,
  Handler,
  DeserializeMiddleware,
  Pluggable
} from "@aws-sdk/types";

type input = Array<string>;
type output = object;

//return tagged union to make compiler happy
function getConcatMiddleware(message: string): MiddlewareType<input, output> {
  return (next: Handler<input, output>): Handler<input, output> => {
    return (args: any): Promise<InitializeHandlerOutput<output>> =>
      next({
        ...args,
        input: args.input.concat(message)
      });
  };
}

describe("MiddlewareStack", () => {
  it("should resolve the stack into a composed handler", async () => {
    const stack = new MiddlewareStack<input, output>();
    const secondMW = getConcatMiddleware("second") as InitializeMiddleware<
      input,
      output
    >;
    stack.add(secondMW, { name: "second" });
    stack.addRelativeTo(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      { relation: "before", toMiddleware: "second" }
    );
    stack.add(getConcatMiddleware("fourth") as BuildMiddleware<input, output>, {
      step: "build",
      name: "fourth"
    });
    stack.add(getConcatMiddleware("third") as BuildMiddleware<input, output>, {
      step: "build",
      priority: "high"
    });
    stack.add(
      getConcatMiddleware("fifth") as FinalizeRequestMiddleware<input, output>,
      { step: "finalizeRequest", name: "fifth" }
    );
    stack.add(
      getConcatMiddleware("seventh") as FinalizeRequestMiddleware<
        input,
        output
      >,
      { step: "finalizeRequest" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("sixth") as FinalizeRequestMiddleware<input, output>,
      {
        step: "finalizeRequest",
        relation: "after",
        toMiddleware: "fifth"
      }
    );
    stack.add(
      getConcatMiddleware("ninth") as DeserializeMiddleware<input, output>,
      { priority: "low", step: "deserialize" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("eighth") as DeserializeMiddleware<input, output>,
      { step: "deserialize", relation: "before", toMiddleware: "doesnt_exist" }
    );
    const inner = jest.fn();

    const composed = stack.resolve(inner, {} as any);
    await composed({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
    expect(inner).toBeCalledWith({
      input: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth"
      ]
    });
  });

  it("should allow adding middleware relatively", async () => {
    const stack = new MiddlewareStack<input, output>();
    type MW = InitializeMiddleware<input, output>;
    stack.addRelativeTo(getConcatMiddleware("H") as MW, {
      name: "H",
      relation: "after",
      toMiddleware: "G"
    });
    stack.addRelativeTo(getConcatMiddleware("A") as MW, {
      name: "A",
      relation: "after",
      toMiddleware: "nonExist"
    });
    stack.addRelativeTo(getConcatMiddleware("C") as MW, {
      name: "C",
      relation: "after",
      toMiddleware: "A"
    });
    stack.addRelativeTo(getConcatMiddleware("B") as MW, {
      name: "B",
      relation: "after",
      toMiddleware: "A"
    });
    stack.addRelativeTo(getConcatMiddleware("D") as MW, {
      name: "D",
      relation: "after",
      toMiddleware: "C"
    });
    stack.add(getConcatMiddleware("G") as MW, {
      name: "G",
      priority: "low"
    });
    stack.addRelativeTo(getConcatMiddleware("E") as MW, {
      name: "E",
      relation: "before",
      toMiddleware: "F"
    });
    stack.addRelativeTo(getConcatMiddleware("F") as MW, {
      name: "F",
      relation: "before",
      toMiddleware: "G"
    });
    stack.addRelativeTo(getConcatMiddleware("I") as MW, {
      name: "I",
      relation: "before",
      toMiddleware: "J"
    });
    stack.addRelativeTo(getConcatMiddleware("J") as MW, {
      name: "J",
      relation: "after",
      toMiddleware: "I"
    });
    const inner = jest.fn();

    const composed = stack.resolve(inner, {} as any);
    await composed({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
    const concatenated = inner.mock.calls[0][0].input;
    expect(concatenated.indexOf("H")).toBeGreaterThan(
      concatenated.indexOf("G")
    );
    expect(concatenated.indexOf("C")).toBeGreaterThan(
      concatenated.indexOf("A")
    );
    expect(concatenated.indexOf("B")).toBeGreaterThan(
      concatenated.indexOf("A")
    );
    expect(concatenated.indexOf("D")).toBeGreaterThan(
      concatenated.indexOf("C")
    );
    expect(concatenated.indexOf("E")).toBeLessThan(concatenated.indexOf("F"));
    expect(concatenated.indexOf("F")).toBeLessThan(concatenated.indexOf("G"));
    expect(concatenated.indexOf("I")).toBeLessThan(concatenated.indexOf("J"));
    expect(concatenated.indexOf("J")).toBeGreaterThan(
      concatenated.indexOf("I")
    );
    expect(concatenated.indexOf("H")).toBeGreaterThan(
      concatenated.indexOf("G")
    );
  });

  it("should allow cloning", async () => {
    const stack = new MiddlewareStack<input, output>();
    const secondMiddleware = getConcatMiddleware(
      "second"
    ) as InitializeMiddleware<input, output>;
    stack.add(secondMiddleware);
    stack.add(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      {
        name: "first",
        priority: "high"
      }
    );

    const secondStack = stack.clone();

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second"]);
      return Promise.resolve({ response: {} });
    });
    await secondStack.resolve(inner, {} as any)({ input: [] });
    expect(inner.mock.calls.length).toBe(1);
    expect(() =>
      secondStack.add(secondMiddleware, { name: "first" })
    ).toThrowError("Duplicated middleware name 'first'");
    expect(() =>
      secondStack.addRelativeTo(
        getConcatMiddleware("first") as InitializeMiddleware<input, output>,
        { name: "first", relation: "before", toMiddleware: "first" }
      )
    ).toThrowError("Duplicated middleware name 'first'");
  });

  it("should allow combining stacks", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>
    );
    stack.add(
      getConcatMiddleware("second") as InitializeMiddleware<input, output>,
      {
        name: "second",
        priority: "low"
      }
    );

    const secondStack = new MiddlewareStack<input, output>();
    secondStack.add(
      getConcatMiddleware("fourth") as FinalizeRequestMiddleware<input, output>,
      { step: "build", priority: "low" }
    );
    secondStack.addRelativeTo(
      getConcatMiddleware("third") as FinalizeRequestMiddleware<input, output>,
      { step: "build", relation: "after", toMiddleware: "second" }
    );

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second", "third", "fourth"]);
      return Promise.resolve({ response: {} });
    });
    await stack.concat(secondStack).resolve(inner, {} as any)({ input: [] });

    expect(inner.mock.calls.length).toBe(1);

    secondStack.add(
      getConcatMiddleware("second") as FinalizeRequestMiddleware<input, output>,
      { step: "build", priority: "high", name: "second" }
    );
    expect(() => stack.concat(secondStack)).toThrow(
      "Duplicated middleware name 'second'"
    );
  });

  it("should allow the removal of middleware by constructor identity", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(
      getConcatMiddleware("don't remove me") as InitializeMiddleware<
        input,
        output
      >,
      { name: "notRemove" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("remove me!") as InitializeMiddleware<input, output>,
      {
        relation: "after",
        toMiddleware: "notRemove",
        name: "toRemove"
      }
    );

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["don't remove me", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.remove("toRemove");

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input).toEqual(["don't remove me"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });
  });

  it("should allow the removal of middleware by tag", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(
      getConcatMiddleware("not removed") as InitializeMiddleware<input, output>,
      {
        name: "not removed",
        tags: ["foo", "bar"]
      }
    );
    stack.addRelativeTo(
      getConcatMiddleware("remove me!") as InitializeMiddleware<input, output>,
      {
        relation: "after",
        toMiddleware: "not removed",
        tags: ["foo", "bar", "baz"]
      }
    );

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["not removed", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.removeByTag("baz");

    await stack.resolve(
      ({ input }: DeserializeHandlerArguments<Array<string>>) => {
        expect(input).toEqual(["not removed"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });
  });

  it("should apply customizations from pluggables", async () => {
    const stack = new MiddlewareStack<input, output>();
    const plugin: Pluggable<input, output> = {
      applyToStack: stack => {
        stack.addRelativeTo(
          getConcatMiddleware("second") as InitializeMiddleware<input, output>,
          { relation: "after", toMiddleware: "first" }
        );
        stack.add(
          getConcatMiddleware("first") as InitializeMiddleware<input, output>,
          { name: "first" }
        );
      }
    };
    stack.use(plugin);
    const inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second"]);
      return Promise.resolve({ response: {} });
    });
    await stack.resolve(inner, {} as any)({ input: [] });
    expect(inner.mock.calls.length).toBe(1);
  });
});
