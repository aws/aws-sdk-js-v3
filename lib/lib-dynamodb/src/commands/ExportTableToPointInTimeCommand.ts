// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import type { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_VALUES } from "../commands/utils";
import type {
  DynamoDBDocumentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBDocumentClient";
import { ExportTableToPointInTimeCommand as __ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type ExportTableToPointInTimeFilterSpecification = Omit<FilterSpecification, 'ExpressionAttributeValues'> & {
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type ExportTableToPointInTimeExportDescription = Omit<ExportDescription, 'FilterSpecification'> & {
  FilterSpecification?: ExportTableToPointInTimeFilterSpecification | undefined;
};

/**
 * @public
 */
export type ExportTableToPointInTimeCommandInput = Omit<__ExportTableToPointInTimeCommandInput, "FilterSpecification"> & {
  FilterSpecification?: ExportTableToPointInTimeFilterSpecification | undefined;
};

/**
 * @public
 */
export type ExportTableToPointInTimeCommandOutput = Omit<__ExportTableToPointInTimeCommandOutput, "ExportDescription"> & {
  ExportDescription?: ExportTableToPointInTimeExportDescription | undefined;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExportTableToPointInTimeCommand operation from {@link @aws-sdk/client-dynamodb#ExportTableToPointInTimeCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class ExportTableToPointInTimeCommand extends DynamoDBDocumentClientCommand<
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
  __ExportTableToPointInTimeCommandInput,
  __ExportTableToPointInTimeCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    FilterSpecification: {
      ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
    },
  };
  protected readonly outputKeyNodes = {
    ExportDescription: {
      FilterSpecification: {
        ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
      },
    },
  };

  protected readonly clientCommand: __ExportTableToPointInTimeCommand;
  public readonly middlewareStack: MiddlewareStack<ExportTableToPointInTimeCommandInput | __ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput | __ExportTableToPointInTimeCommandOutput>;

  constructor(readonly input: ExportTableToPointInTimeCommandInput) {
    super();
    this.clientCommand = new __ExportTableToPointInTimeCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}

import type {
  ExportDescription,
  ExportTableToPointInTimeCommandInput as __ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput as __ExportTableToPointInTimeCommandOutput,
  FilterSpecification,
} from "@aws-sdk/client-dynamodb";
import type {
  NativeAttributeValue,
} from "@aws-sdk/util-dynamodb";
