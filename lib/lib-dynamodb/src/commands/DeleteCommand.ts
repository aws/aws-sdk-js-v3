import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  ServiceInputTypes,
  ServiceOutputTypes,
  DeleteItemCommand as __DeleteItemCommand,
  DeleteItemCommandInput as __DeleteItemCommandInput,
  DeleteItemCommandOutput as __DeleteItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type DeleteCommandInput = Omit<__DeleteItemCommandInput, "Key" | "Expected" | "ExpressionAttributeValues"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
  Expected?: {
    [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type DeleteCommandOutput = Omit<__DeleteItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: { [key: string]: NativeAttributeValue };
  };
};

export class DeleteCommand extends $Command<
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: DeleteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      { key: "Key" },
      {
        key: "Expected",
        children: {
          children: [{ key: "Value" }, { key: "AttributeValueList" }],
        },
      },
      { key: "ExpressionAttributeValues" },
    ];
    const outputKeyNodes = [
      { key: "Attributes" },
      { key: "ItemCollectionMetrics", children: [{ key: "ItemCollectionKey" }] },
    ];

    const command = new __DeleteItemCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
