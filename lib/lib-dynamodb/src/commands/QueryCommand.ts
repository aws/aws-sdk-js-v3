import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  Condition,
  ServiceInputTypes,
  ServiceOutputTypes,
  QueryCommand as __QueryCommand,
  QueryCommandInput as __QueryCommandInput,
  QueryCommandOutput as __QueryCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type QueryCommandInput = Omit<
  __QueryCommandInput,
  "KeyConditions" | "QueryFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"
> & {
  KeyConditions?: {
    [key: string]: Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  QueryFilter?: {
    [key: string]: Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExclusiveStartKey?: { [key: string]: NativeAttributeValue };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type QueryCommandOutput = Omit<__QueryCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: {
    [key: string]: NativeAttributeValue;
  }[];
  LastEvaluatedKey?: { [key: string]: NativeAttributeValue };
};

export class QueryCommand extends $Command<
  QueryCommandInput,
  QueryCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryCommandInput) {
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
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      {
        key: "KeyConditions",
        children: {
          children: [{ key: "AttributeValueList" }],
        },
      },
      {
        key: "QueryFilter",
        children: {
          children: [{ key: "AttributeValueList" }],
        },
      },
      { key: "ExclusiveStartKey" },
      { key: "ExpressionAttributeValues" },
    ];
    const outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];

    const command = new __QueryCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
