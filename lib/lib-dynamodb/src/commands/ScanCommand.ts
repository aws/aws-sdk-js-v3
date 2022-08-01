// smithy-typescript generated code
import {
  Condition,
  ScanCommand as __ScanCommand,
  ScanCommandInput as __ScanCommandInput,
  ScanCommandOutput as __ScanCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type ScanCommandInput = Omit<
  __ScanCommandInput,
  "ScanFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"
> & {
  ScanFilter?: Record<
    string,
    Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    }
  >;
  ExclusiveStartKey?: Record<string, NativeAttributeValue>;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
};

export type ScanCommandOutput = Omit<__ScanCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: Record<string, NativeAttributeValue>[];
  LastEvaluatedKey?: Record<string, NativeAttributeValue>;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ScanCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class ScanCommand extends DynamoDBDocumentClientCommand<
  ScanCommandInput,
  ScanCommandOutput,
  __ScanCommandInput,
  __ScanCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    {
      key: "ScanFilter",
      children: {
        children: [{ key: "AttributeValueList" }],
      },
    },
    { key: "ExclusiveStartKey" },
    { key: "ExpressionAttributeValues" },
  ];
  protected readonly outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];

  protected readonly clientCommand: __ScanCommand;
  public readonly middlewareStack: MiddlewareStack<
    ScanCommandInput | __ScanCommandInput,
    ScanCommandOutput | __ScanCommandOutput
  >;

  constructor(readonly input: ScanCommandInput) {
    super();
    this.clientCommand = new __ScanCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScanCommandInput, ScanCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
