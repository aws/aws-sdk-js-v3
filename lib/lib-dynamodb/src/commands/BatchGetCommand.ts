import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  KeysAndAttributes,
  ServiceInputTypes,
  ServiceOutputTypes,
  BatchGetItemCommand as __BatchGetItemCommand,
  BatchGetItemCommandInput as __BatchGetItemCommandInput,
  BatchGetItemCommandOutput as __BatchGetItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type BatchGetCommandInput = Omit<__BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems:
    | {
        [key: string]: Omit<KeysAndAttributes, "Keys"> & {
          Keys:
            | {
                [key: string]: NativeAttributeValue;
              }[]
            | undefined;
        };
      }
    | undefined;
};

export type BatchGetCommandOutput = Omit<__BatchGetItemCommandOutput, "Responses" | "UnprocessedKeys"> & {
  Responses?: {
    [key: string]: {
      [key: string]: NativeAttributeValue;
    }[];
  };
  UnprocessedKeys?: {
    [key: string]: Omit<KeysAndAttributes, "Keys"> & {
      Keys:
        | {
            [key: string]: NativeAttributeValue;
          }[]
        | undefined;
    };
  };
};

export class BatchGetCommand extends $Command<
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetCommandInput) {
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
  ): Handler<BatchGetCommandInput, BatchGetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      {
        key: "RequestItems",
        children: {
          children: [{ key: "Keys" }],
        },
      },
    ];
    const outputKeyNodes = [
      { key: "Responses", children: {} },
      {
        key: "UnprocessedKeys",
        children: {
          children: [{ key: "Keys" }],
        },
      },
    ];

    const command = new __BatchGetItemCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
