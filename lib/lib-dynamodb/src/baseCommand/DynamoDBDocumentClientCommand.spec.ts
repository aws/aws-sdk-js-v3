import { Handler, MiddlewareStack } from "@smithy/types";

import { KeyNode } from "../commands/utils";
import { DynamoDBDocumentClientCommand } from "./DynamoDBDocumentClientCommand";

class AnyCommand extends DynamoDBDocumentClientCommand<{}, {}, {}, {}, {}> {
  public middlewareStack: MiddlewareStack<{}, {}>;
  public input: {};
  protected inputKeyNodes: KeyNode[] = [];
  protected outputKeyNodes: KeyNode[] = [];

  public argCaptor: [Function, object][] = [];

  protected readonly clientCommand = {
    middlewareStack: {
      argCaptor: this.argCaptor,
      addRelativeTo(fn, config) {
        this.argCaptor.push([fn, config]);
      },
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
  // ToDo: Investigate why Jest29 throws TypeError: Class constructor Command cannot be invoked without 'new'
  it.skip("should not allow usage of the default middlewareStack", () => {
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
