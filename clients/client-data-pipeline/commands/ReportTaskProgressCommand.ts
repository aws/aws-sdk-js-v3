import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ReportTaskProgressInput, ReportTaskProgressOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ReportTaskProgressCommand,
  serializeAws_json1_1ReportTaskProgressCommand,
} from "../protocols/Aws_json1_1";
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

export type ReportTaskProgressCommandInput = ReportTaskProgressInput;
export type ReportTaskProgressCommandOutput = ReportTaskProgressOutput & __MetadataBearer;

/**
 * <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not
 *             receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement,
 *             the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time
 *             from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p>
 */
export class ReportTaskProgressCommand extends $Command<
  ReportTaskProgressCommandInput,
  ReportTaskProgressCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportTaskProgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "ReportTaskProgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReportTaskProgressInput.filterSensitiveLog,
      outputFilterSensitiveLog: ReportTaskProgressOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReportTaskProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReportTaskProgressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReportTaskProgressCommandOutput> {
    return deserializeAws_json1_1ReportTaskProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
