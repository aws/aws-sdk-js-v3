import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  ServiceInputTypes,
  ServiceOutputTypes,
  PutItemCommand as __PutItemCommand,
  PutItemCommandInput as __PutItemCommandInput,
  PutItemCommandOutput as __PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type PutCommandInput = Omit<__PutItemCommandInput, "Item" | "Expected" | "ExpressionAttributeValues"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
  Expected?: {
    [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type PutCommandOutput = Omit<__PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: { [key: string]: NativeAttributeValue };
  };
};

export class PutCommand extends $Command<PutCommandInput, PutCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  private readonly inputKeyNodes = [
    { key: "Item" },
    {
      key: "Expected",
      children: {
        children: [{ key: "Value" }, { key: "AttributeValueList" }],
      },
    },
    { key: "ExpressionAttributeValues" },
  ];
  private readonly outputKeyNodes = [
    { key: "Attributes" },
    { key: "ItemCollectionMetrics", children: [{ key: "ItemCollectionKey" }] },
  ];

  constructor(readonly input: PutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __PutItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
