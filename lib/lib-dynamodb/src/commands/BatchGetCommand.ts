// smithy-typescript generated code
import {
  BatchGetItemCommand as __BatchGetItemCommand,
  BatchGetItemCommandInput as __BatchGetItemCommandInput,
  BatchGetItemCommandOutput as __BatchGetItemCommandOutput,
  KeysAndAttributes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { marshallInput, unmarshallOutput } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type BatchGetCommandInput = Omit<__BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems:
    | Record<
        string,
        Omit<KeysAndAttributes, "Keys"> & {
          Keys: Record<string, NativeAttributeValue>[] | undefined;
        }
      >
    | undefined;
};

export type BatchGetCommandOutput = Omit<__BatchGetItemCommandOutput, "Responses" | "UnprocessedKeys"> & {
  Responses?: Record<string, Record<string, NativeAttributeValue>[]>;
  UnprocessedKeys?: Record<
    string,
    Omit<KeysAndAttributes, "Keys"> & {
      Keys: Record<string, NativeAttributeValue>[] | undefined;
    }
  >;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchGetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchGetCommand extends $Command<
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
    {
      key: "RequestItems",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];
  private readonly outputKeyNodes = [
    { key: "Responses", children: {} },
    {
      key: "UnprocessedKeys",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];

  constructor(readonly input: BatchGetCommandInput) {
    super();
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
    const command = new __BatchGetItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
