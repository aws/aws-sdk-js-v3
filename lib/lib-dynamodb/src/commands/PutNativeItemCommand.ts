import {
  DynamoDBClientResolvedConfig,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

export type PutNativeItemCommandInput = Omit<PutItemCommandInput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
};

export type PutNativeItemCommandOutput = Omit<PutItemCommandOutput, "Attributes"> & {
  Attributes: { [key: string]: NativeAttributeValue };
};

/**
 * Creates a new item, or replaces an old item with a new item by
 * delegating to `PutItemCommand`.
 *
 * Supply the same parameters as `PutItemCommand` with
 * `AttributeValue`s substituted by native JavaScript types.
 *
 * @see DynamoDB.putItem
 * @example Create a new item in a table
 *  const params = {
 *    TableName : 'Table',
 *    Item: {
 *       HashKey: 'haskey',
 *       NumAttribute: 1,
 *       BoolAttribute: true,
 *       ListAttribute: [1, 'two', false],
 *       MapAttribute: { foo: 'bar'},
 *       NullAttribute: null
 *    }
 *  };
 *
 *  const client = new DynamoDBClient({});
 *
 *  try {
 *   const data = await client.send(new PutNativeItemCommand(params));
 *   console.log(data);
 *  } catch(err) {
 *   console.log(err);
 *  }
 *
 */
export class PutNativeItemCommand extends $Command<
  PutNativeItemCommandInput,
  PutNativeItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  private command: PutItemCommand;

  constructor(readonly input: PutNativeItemCommandInput) {
    super();
    this.command = new PutItemCommand({ ...input, Item: marshall(input.Item) });
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<PutNativeItemCommandInput, PutNativeItemCommandOutput> {
    const handler = this.command.resolveMiddleware(clientStack, configuration, options);

    return () =>
      new Promise((resolve, reject) => {
        handler(this.command)
          .then((data) => {
            resolve({
              ...data,
              output: {
                ...data.output,
                ...(data.output.Attributes && { Attributes: unmarshall(data.output.Attributes) }),
              } as PutNativeItemCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
