import { MiddlewareStack } from "./";
import {
  Handler,
  HandlerArguments,
  FinalizeHandlerArguments,
  Middleware,
  HandlerExecutionContext,
  FinalizeRequestMiddleware,
  FinalizeHandler,
  BuildMiddleware,
  HandlerOutput,
  DeserializeHandlerArguments
} from "@aws-sdk/types";
import { request } from "https";

type input = Array<string>;
type output = object;

//return tagged union to make compiler happy
function getConcatMiddleware(
  message: string
): Middleware<input, output> | FinalizeRequestMiddleware<input, output> {
  return (next: Handler<input, output>): Handler<input, output> => {
    return (args: HandlerArguments<input>): Promise<HandlerOutput<output>> =>
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

    const middleware = shuffle([
      [getConcatMiddleware("second"), {}],
      [getConcatMiddleware("first"), { priority: 10 }],
      [getConcatMiddleware("fourth"), { step: "build" }],
      [getConcatMiddleware("third"), { step: "build", priority: 1 }],
      [getConcatMiddleware("fifth"), { step: "finalizeRequest" }],
      [getConcatMiddleware("sixth"), { step: "finalizeRequest", priority: -1 }],
      [getConcatMiddleware("seven"), { step: "deserialize" }]
    ]);

    for (const [mw, options] of middleware) {
      stack.add(mw as any, options);
    }

    const inner = jest.fn();

    const composed = stack.resolve(inner, {} as any);
    await composed({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
    expect(inner).toBeCalledWith({
      input: ["first", "second", "third", "fourth", "fifth", "sixth", "seven"]
    });
  });

  it("should allow cloning", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(getConcatMiddleware("second") as Middleware<input, output>);
    stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
      priority: 100
    });

    const secondStack = stack.clone();

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second"]);
      return Promise.resolve({ response: {} });
    });
    await secondStack.resolve(inner, {} as any)({ input: [] });
    expect(inner.mock.calls.length).toBe(1);
  });

  it("should allow combining stacks", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(getConcatMiddleware("second") as Middleware<input, output>);
    stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
      priority: 100
    });

    const secondStack = new MiddlewareStack<input, output>();
    secondStack.add(
      getConcatMiddleware("fourth") as FinalizeRequestMiddleware<input, output>,
      { step: "build" }
    );
    secondStack.add(
      getConcatMiddleware("third") as FinalizeRequestMiddleware<input, output>,
      { step: "build", priority: 100 }
    );

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second", "third", "fourth"]);
      return Promise.resolve({ response: {} });
    });
    await stack.concat(secondStack).resolve(inner, {} as any)({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
  });

  it("should allow the removal of middleware by constructor identity", async () => {
    const MyMiddleware = getConcatMiddleware("remove me!") as Middleware<
      input,
      output
    >;
    const stack = new MiddlewareStack<input, output>();
    stack.add(MyMiddleware);
    stack.add(getConcatMiddleware("don't remove me") as Middleware<
      input,
      output
    >);

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["don't remove me", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.remove(MyMiddleware);

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
    stack.add(getConcatMiddleware("not removed") as Middleware<input, output>, {
      tags: { foo: true, bar: true }
    });
    stack.add(getConcatMiddleware("remove me!") as Middleware<input, output>, {
      tags: { foo: true, bar: true, baz: true }
    });

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["not removed", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.remove("baz");

    await stack.resolve(
      ({ input }: DeserializeHandlerArguments<Array<string>>) => {
        expect(input).toEqual(["not removed"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });
  });

  it("should allow filtering of middlewares by middleware options", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
      priority: 1
    });
    stack.add(getConcatMiddleware("second") as Middleware<input, output>, {
      tags: { foo: true, bar: true }
    });
    stack.add(getConcatMiddleware("third") as Middleware<input, output>, {
      step: "initialize"
    });
    stack.add(getConcatMiddleware("fourth") as Middleware<input, output>, {
      step: "serialize"
    });
    stack.add(getConcatMiddleware("fifth") as BuildMiddleware<input, output>, {
      step: "build"
    });
    stack.add(
      getConcatMiddleware("sixth") as FinalizeRequestMiddleware<input, output>,
      {
        step: "finalizeRequest"
      }
    );
    const filteredStack = stack.filter(middlewareStats => {
      return (
        middlewareStats.priority === 1 ||
        (middlewareStats.tags && middlewareStats.tags.foo === true) ||
        middlewareStats.step === "initialize"
      );
    });
    const handler = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "third", "second"]);
      return Promise.resolve({ response: {} });
    });

    const composed = filteredStack.resolve(handler, {} as any);
    await composed({ input: [] });

    expect(handler.mock.calls.length).toBe(1);
  });

  it("should not allow altering stack that to be filtered", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(getConcatMiddleware("first") as Middleware<input, output>, {
      priority: 1
    });
    stack.add(getConcatMiddleware("second") as Middleware<input, output>, {
      tags: { foo: true, bar: true, baz: true }
    });
    const filteredStack = stack.filter(middlewareStats => {
      if (middlewareStats.tags!.baz) {
        //try make "second" middleware prior to "first" middleware
        middlewareStats.priority = 100;
      }
      return true;
    });
    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second"]);
      return Promise.resolve({ response: {} });
    });
    await filteredStack.resolve(inner, {} as any)({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
  });
});
