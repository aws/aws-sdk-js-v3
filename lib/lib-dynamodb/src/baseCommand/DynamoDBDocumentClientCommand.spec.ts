import { Handler, MiddlewareStack } from "@aws-sdk/types";

import { KeyNode } from "../commands/utils";
import { DynamoDBDocumentClientCommand } from "./DynamoDBDocumentClientCommand";

class AnyCommand extends DynamoDBDocumentClientCommand<{}, {}, {}> {
  public input: {};
  protected inputKeyNodes: KeyNode[] = [];
  protected outputKeyNodes: KeyNode[] = [];

  public argCaptor: [Function, object][] = [];

  public resolveMiddleware(clientStack: MiddlewareStack<any, any>, configuration: {}, options: any): Handler<{}, {}> {
    const command: any = {
      middlewareStack: {
        argCaptor: this.argCaptor,
        add(fn, config) {
          this.argCaptor.push([fn, config]);
        },
      },
    };
    this.addMarshallingMiddleware(command, "AnyCommand", {} as any);
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
        name: "AnyCommandMarshall",
        step: "initialize",
      });
    }
    {
      const [middleware, options] = command.argCaptor[1];
      expect(middleware.toString()).toContain(`unmarshallOutput`);
      expect(options).toEqual({
        name: "AnyCommandUnmarshall",
        step: "deserialize",
      });
    }
  });
});
