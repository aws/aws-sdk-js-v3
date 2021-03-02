import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  AttributeValueUpdate,
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  ServiceInputTypes,
  ServiceOutputTypes,
  UpdateItemCommand as __UpdateItemCommand,
  UpdateItemCommandInput as __UpdateItemCommandInput,
  UpdateItemCommandOutput as __UpdateItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type UpdateCommandInput = Omit<
  __UpdateItemCommandInput,
  "Key" | "AttributeUpdates" | "Expected" | "ExpressionAttributeValues"
> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
  AttributeUpdates?: {
    [key: string]: Omit<AttributeValueUpdate, "Value"> & {
      Value?: NativeAttributeValue;
    };
  };
  Expected?: {
    [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type UpdateCommandOutput = Omit<__UpdateItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: { [key: string]: NativeAttributeValue };
  };
};

export class UpdateCommand extends $Command<
  UpdateCommandInput,
  UpdateCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCommandInput, UpdateCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      { key: "Key" },
      {
        key: "AttributeUpdates",
        children: {
          children: [{ key: "Value" }],
        },
      },
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

    const command = new __UpdateItemCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, outputKeyNodes, unmarshallOptions),
      };
    };
  }
  // Start section: command_body_extra
  // End section: command_body_extra
}
