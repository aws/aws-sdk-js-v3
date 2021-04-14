import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
  serializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
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

export type ReportTaskRunnerHeartbeatCommandInput = ReportTaskRunnerHeartbeatInput;
export type ReportTaskRunnerHeartbeatCommandOutput = ReportTaskRunnerHeartbeatOutput & __MetadataBearer;

/**
 * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational.
 *             If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use
 *             this call to detect when the task runner application has failed and restart a new instance.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ReportTaskRunnerHeartbeat
 * Content-Length: 84
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"taskrunnerId": "1234567890",
 *  "workerGroup": "wg-12345",
 *  "hostname": "example.com"}
 *
 *             </request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 20
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"terminate": false}
 *
 *             </response>
 *         </examples>
 */
export class ReportTaskRunnerHeartbeatCommand extends $Command<
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportTaskRunnerHeartbeatCommandInput) {
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
  ): Handler<ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "ReportTaskRunnerHeartbeatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReportTaskRunnerHeartbeatInput.filterSensitiveLog,
      outputFilterSensitiveLog: ReportTaskRunnerHeartbeatOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReportTaskRunnerHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReportTaskRunnerHeartbeatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReportTaskRunnerHeartbeatCommandOutput> {
    return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
