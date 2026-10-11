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
import { DescribeExportCommand as __DescribeExportCommand } from "@aws-sdk/client-dynamodb";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type DescribeExportCommandInput = __DescribeExportCommandInput;

/**
 * @public
 */
export type DescribeExportCommandOutput = Omit<__DescribeExportCommandOutput, "ExportDescription"> & {
  ExportDescription?: Omit<ExportDescription, "FilterSpecification"> & {
    FilterSpecification?: Omit<FilterSpecification, "ExpressionAttributeValues"> & {
      ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
    } | undefined;
  } | undefined;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * DescribeExportCommand operation from {@link @aws-sdk/client-dynamodb#DescribeExportCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class DescribeExportCommand extends DynamoDBDocumentClientCommand<
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
  __DescribeExportCommandInput,
  __DescribeExportCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
  };
  protected readonly outputKeyNodes = {
    ExportDescription: {
      FilterSpecification: {
        ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
      },
    },
  };

  protected readonly clientCommand: __DescribeExportCommand;
  public readonly middlewareStack: MiddlewareStack<DescribeExportCommandInput | __DescribeExportCommandInput,
  DescribeExportCommandOutput | __DescribeExportCommandOutput>;

  constructor(readonly input: DescribeExportCommandInput) {
    super();
    this.clientCommand = new __DescribeExportCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExportCommandInput, DescribeExportCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}

import type {
  DescribeExportCommandInput as __DescribeExportCommandInput,
  DescribeExportCommandOutput as __DescribeExportCommandOutput,
  ExportDescription,
  FilterSpecification,
} from "@aws-sdk/client-dynamodb";
import type {
  NativeAttributeValue,
} from "@aws-sdk/util-dynamodb";
