import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  GetItemCommand as __GetItemCommand,
  GetItemCommandInput as __GetItemCommandInput,
  GetItemCommandOutput as __GetItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type GetCommandInput = Omit<__GetItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type GetCommandOutput = Omit<__GetItemCommandOutput, "Item"> & {
  Item?: { [key: string]: NativeAttributeValue };
};

export class GetCommand extends $Command<GetCommandInput, GetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  constructor(readonly input: GetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommandInput, GetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [{ key: "Key" }];
    const outputKeyNodes = [{ key: "Item" }];

    const command = new __GetItemCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
