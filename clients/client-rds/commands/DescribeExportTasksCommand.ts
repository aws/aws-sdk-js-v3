import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeExportTasksCommand,
  serializeAws_queryDescribeExportTasksCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeExportTasksCommandInput = DescribeExportTasksMessage;
export type DescribeExportTasksCommandOutput = ExportTasksMessage & __MetadataBearer;

/**
 * <p>Returns information about a snapshot export to Amazon S3. This API operation supports
 *             pagination. </p>
 */
export class DescribeExportTasksCommand extends $Command<
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExportTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeExportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExportTasksMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ExportTasksMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeExportTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExportTasksCommandOutput> {
    return deserializeAws_queryDescribeExportTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
