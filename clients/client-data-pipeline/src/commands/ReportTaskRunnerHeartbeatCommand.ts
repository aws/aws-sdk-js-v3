// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import {
  ReportTaskRunnerHeartbeatInput,
  ReportTaskRunnerHeartbeatInputFilterSensitiveLog,
  ReportTaskRunnerHeartbeatOutput,
  ReportTaskRunnerHeartbeatOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
  serializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
} from "../protocols/Aws_json1_1";

export interface ReportTaskRunnerHeartbeatCommandInput extends ReportTaskRunnerHeartbeatInput {}
export interface ReportTaskRunnerHeartbeatCommandOutput extends ReportTaskRunnerHeartbeatOutput, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ReportTaskRunnerHeartbeatCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ReportTaskRunnerHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReportTaskRunnerHeartbeatCommandInput} for command's `input` shape.
 * @see {@link ReportTaskRunnerHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class ReportTaskRunnerHeartbeatCommand extends $Command<
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReportTaskRunnerHeartbeatCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "ReportTaskRunnerHeartbeatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReportTaskRunnerHeartbeatInputFilterSensitiveLog,
      outputFilterSensitiveLog: ReportTaskRunnerHeartbeatOutputFilterSensitiveLog,
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
