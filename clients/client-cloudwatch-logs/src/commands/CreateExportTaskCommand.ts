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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import {
  CreateExportTaskRequest,
  CreateExportTaskRequestFilterSensitiveLog,
  CreateExportTaskResponse,
  CreateExportTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateExportTaskCommand,
  serializeAws_json1_1CreateExportTaskCommand,
} from "../protocols/Aws_json1_1";

export interface CreateExportTaskCommandInput extends CreateExportTaskRequest {}
export interface CreateExportTaskCommandOutput extends CreateExportTaskResponse, __MetadataBearer {}

/**
 * <p>Creates an export task so that you can efficiently export data from a log group to an
 *       Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use
 *       credentials that have permission to write to the S3 bucket that you specify as the
 *       destination.</p>
 *          <p>Exporting log data to S3 buckets that are encrypted by KMS is supported.
 *       Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a
 *       retention period is also supported.</p>
 *          <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p>
 *          <p>This is an asynchronous call. If all the required information is provided, this
 *       operation initiates an export task and responds with the ID of the task. After the task has started,
 *       you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can
 *       only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time.
 *       To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p>
 *          <p>You can export logs from multiple log groups or multiple time ranges to the same S3
 *       bucket. To separate log data for each export task, specify a prefix to be used as the Amazon
 *       S3 key prefix for all exported objects.</p>
 *          <note>
 *             <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can
 *         sort the exported log field data by using Linux utilities.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateExportTaskCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateExportTaskCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new CreateExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateExportTaskCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class CreateExportTaskCommand extends $Command<
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: CreateExportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExportTaskCommandInput, CreateExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "CreateExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExportTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExportTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExportTaskCommandOutput> {
    return deserializeAws_json1_1CreateExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
