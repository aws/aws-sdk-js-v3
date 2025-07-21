import { Handler, MiddlewareStack } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { KeyNodeChildren } from "../commands/utils";
import { DynamoDBDocumentClientCommand } from "./DynamoDBDocumentClientCommand";

class AnyCommand extends DynamoDBDocumentClientCommand<{}, {}, {}, {}, {}> {
  // @ts-ignore Property 'middlewareStack' has no initializer
  public middlewareStack: MiddlewareStack<{}, {}>;
  // @ts-ignore Property 'input' has no initializer
  public input: {};
  protected inputKeyNodes: KeyNodeChildren = {};
  protected outputKeyNodes: KeyNodeChildren = {};

  public argCaptor: [Function, object][] = [];

  protected readonly clientCommand = {
    middlewareStack: {
      argCaptor: this.argCaptor,
      addRelativeTo(fn: any, config: any) {
        this.argCaptor.push([fn, config]);
      },
      add(fn: any, config: any) {},
    },
  } as any;
  protected readonly clientCommandName = "AnyCommand";

  public constructor() {
    super();
  }

  public resolveMiddleware(clientStack: MiddlewareStack<any, any>, configuration: {}, options: any): Handler<{}, {}> {
    this.addMarshallingMiddleware({} as any);
    return null as any;
  }
}

describe("DynamoDBDocumentClientCommand", () => {
  it("should not allow usage of the default middlewareStack", () => {
    const command = new AnyCommand();
    command.resolveMiddleware(null as any, null as any, null as any);
    {
      const [middleware, options] = command.argCaptor[0];
      expect(middleware.toString()).toContain(`marshallInput`);
      expect(options).toEqual({
        name: "DocumentMarshall",
        override: true,
        relation: "before",
        toMiddleware: "serializerMiddleware",
      });
    }
    {
      const [middleware, options] = command.argCaptor[1];
      expect(middleware.toString()).toContain(`unmarshallOutput`);
      expect(options).toEqual({
        name: "DocumentUnmarshall",
        override: true,
        relation: "before",
        toMiddleware: "deserializerMiddleware",
      });
    }
  });
});
