import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  Condition,
  ServiceInputTypes,
  ServiceOutputTypes,
  ScanCommand as __ScanCommand,
  ScanCommandInput as __ScanCommandInput,
  ScanCommandOutput as __ScanCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type ScanCommandInput = Omit<
  __ScanCommandInput,
  "ScanFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"
> & {
  ScanFilter?: {
    [key: string]: Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExclusiveStartKey?: { [key: string]: NativeAttributeValue };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type ScanCommandOutput = Omit<__ScanCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: {
    [key: string]: NativeAttributeValue;
  }[];
  LastEvaluatedKey?: { [key: string]: NativeAttributeValue };
};

export class ScanCommand extends $Command<ScanCommandInput, ScanCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ScanCommandInput) {
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
  ): Handler<ScanCommandInput, ScanCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      {
        key: "ScanFilter",
        children: {
          children: [{ key: "AttributeValueList" }],
        },
      },
      { key: "ExclusiveStartKey" },
      { key: "ExpressionAttributeValues" },
    ];
    const outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];

    const command = new __ScanCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
