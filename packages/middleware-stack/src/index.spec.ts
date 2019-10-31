import { MiddlewareStack } from "./";
import {
  InitializeHandler,
  InitializeHandlerArguments,
  FinalizeHandlerArguments,
  InitializeMiddleware,
  HandlerExecutionContext,
  FinalizeRequestMiddleware,
  FinalizeHandler,
  BuildMiddleware,
  InitializeHandlerOutput,
  DeserializeHandlerArguments,
  HandlerOptions,
  MiddlewareType,
  Handler,
  DeserializeMiddleware
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
function shuffle<T>(arr: Array<T>): Array<T> {
  arr = [...arr];
  for (let i = arr.length; i > 0; i--) {
    const rand = Math.floor(Math.random() * i);
    const curr = i - 1;
    [arr[curr], arr[rand]] = [arr[rand], arr[curr]];
  }
  return arr;
}

describe("MiddlewareStack", () => {
  it("should resolve the stack into a composed handler", async () => {
    const stack = new MiddlewareStack<input, output>();
    const secondMW = getConcatMiddleware("second") as InitializeMiddleware<
      input,
      output
    >;
    stack.add(secondMW, "second");
    stack.addRelativeTo(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      "first",
      { relation: "before", toMiddleware: secondMW }
    );
    stack.add(
      getConcatMiddleware("fourth") as BuildMiddleware<input, output>,
      "fourth",
      { step: "build" }
    );
    stack.add(
      getConcatMiddleware("third") as BuildMiddleware<input, output>,
      "third",
      { step: "build", priority: "before" }
    );
    stack.add(
      getConcatMiddleware("fifth") as FinalizeRequestMiddleware<input, output>,
      "fifth",
      { step: "finalizeRequest" }
    );
    stack.add(
      getConcatMiddleware("seventh") as FinalizeRequestMiddleware<
        input,
        output
      >,
      "seventh",
      { step: "finalizeRequest" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("sixth") as FinalizeRequestMiddleware<input, output>,
      "sixth",
      {
        step: "finalizeRequest",
        relation: "after",
        toMiddleware: "fifth"
      }
    );
    stack.add(
      getConcatMiddleware("ninth") as DeserializeMiddleware<input, output>,
      "ninth",
      { priority: "after", step: "deserialize" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("eighth") as DeserializeMiddleware<input, output>,
      "eighth",
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

  // it("should allow cloning", async () => {
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(getConcatMiddleware("second") as Middleware<input, output>);
  //   stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
  //     priority: 100
  //   });

  //   const secondStack = stack.clone();

  //   let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
  //     expect(input).toEqual(["first", "second"]);
  //     return Promise.resolve({ response: {} });
  //   });
  //   await secondStack.resolve(inner, {} as any)({ input: [] });
  //   expect(inner.mock.calls.length).toBe(1);
  // });

  // it("should allow combining stacks", async () => {
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(getConcatMiddleware("second") as Middleware<input, output>);
  //   stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
  //     priority: 100
  //   });

  //   const secondStack = new MiddlewareStack<input, output>();
  //   secondStack.add(
  //     getConcatMiddleware("fourth") as FinalizeRequestMiddleware<input, output>,
  //     { step: "build" }
  //   );
  //   secondStack.add(
  //     getConcatMiddleware("third") as FinalizeRequestMiddleware<input, output>,
  //     { step: "build", priority: 100 }
  //   );

  //   let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
  //     expect(input).toEqual(["first", "second", "third", "fourth"]);
  //     return Promise.resolve({ response: {} });
  //   });
  //   await stack.concat(secondStack).resolve(inner, {} as any)({ input: [] });

  //   expect(inner.mock.calls.length).toBe(1);
  // });

  // it("should allow the removal of middleware by constructor identity", async () => {
  //   const MyMiddleware = getConcatMiddleware("remove me!") as Middleware<
  //     input,
  //     output
  //   >;
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(MyMiddleware);
  //   stack.add(getConcatMiddleware("don't remove me") as Middleware<
  //     input,
  //     output
  //   >);

  //   await stack.resolve(
  //     ({ input }: FinalizeHandlerArguments<Array<string>>) => {
  //       expect(input.sort()).toEqual(["don't remove me", "remove me!"]);
  //       return Promise.resolve({ response: {} });
  //     },
  //     {} as any
  //   )({ input: [] });

  //   stack.remove(MyMiddleware);

  //   await stack.resolve(
  //     ({ input }: FinalizeHandlerArguments<Array<string>>) => {
  //       expect(input).toEqual(["don't remove me"]);
  //       return Promise.resolve({ response: {} });
  //     },
  //     {} as any
  //   )({ input: [] });
  // });

  // it("should allow the removal of middleware by tag", async () => {
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(getConcatMiddleware("not removed") as Middleware<input, output>, {
  //     tags: { foo: true, bar: true }
  //   });
  //   stack.add(getConcatMiddleware("remove me!") as Middleware<input, output>, {
  //     tags: { foo: true, bar: true, baz: true }
  //   });

  //   await stack.resolve(
  //     ({ input }: FinalizeHandlerArguments<Array<string>>) => {
  //       expect(input.sort()).toEqual(["not removed", "remove me!"]);
  //       return Promise.resolve({ response: {} });
  //     },
  //     {} as any
  //   )({ input: [] });

  //   stack.remove("baz");

  //   await stack.resolve(
  //     ({ input }: DeserializeHandlerArguments<Array<string>>) => {
  //       expect(input).toEqual(["not removed"]);
  //       return Promise.resolve({ response: {} });
  //     },
  //     {} as any
  //   )({ input: [] });
  // });

  // it("should allow filtering of middlewares by middleware options", async () => {
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
  //     priority: 1
  //   });
  //   stack.add(getConcatMiddleware("second") as Middleware<input, output>, {
  //     tags: { foo: true, bar: true }
  //   });
  //   stack.add(getConcatMiddleware("third") as Middleware<input, output>, {
  //     step: "initialize"
  //   });
  //   stack.add(getConcatMiddleware("fourth") as Middleware<input, output>, {
  //     step: "serialize"
  //   });
  //   stack.add(getConcatMiddleware("fifth") as BuildMiddleware<input, output>, {
  //     step: "build"
  //   });
  //   stack.add(
  //     getConcatMiddleware("sixth") as FinalizeRequestMiddleware<input, output>,
  //     {
  //       step: "finalizeRequest"
  //     }
  //   );
  //   const filteredStack = stack.filter(middlewareStats => {
  //     return (
  //       middlewareStats.priority === 1 ||
  //       (middlewareStats.tags && middlewareStats.tags.foo === true) ||
  //       middlewareStats.step === "initialize"
  //     );
  //   });
  //   const handler = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
  //     expect(input).toEqual(["first", "third", "second"]);
  //     return Promise.resolve({ response: {} });
  //   });

  //   const composed = filteredStack.resolve(handler, {} as any);
  //   await composed({ input: [] });

  //   expect(handler.mock.calls.length).toBe(1);
  // });

  // it("should not allow altering stack that to be filtered", async () => {
  //   const stack = new MiddlewareStack<input, output>();
  //   stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
  //     priority: 1
  //   });
  //   stack.add(getConcatMiddleware("second") as Middleware<input, output>, {
  //     tags: { foo: true, bar: true, baz: true }
  //   });
  //   const filteredStack = stack.filter(middlewareStats => {
  //     if (middlewareStats.tags!.baz) {
  //       //try make "second" middleware prior to "first" middleware
  //       middlewareStats.priority = 100;
  //     }
  //     return true;
  //   });
  //   let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
  //     expect(input).toEqual(["first", "second"]);
  //     return Promise.resolve({ response: {} });
  //   });
  //   await filteredStack.resolve(inner, {} as any)({ input: [] });

  //   expect(inner.mock.calls.length).toBe(1);
  // });
});
