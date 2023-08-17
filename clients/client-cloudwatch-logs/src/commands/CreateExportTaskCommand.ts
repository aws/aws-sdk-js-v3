// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CreateExportTaskRequest, CreateExportTaskResponse } from "../models/models_0";
import { de_CreateExportTaskCommand, se_CreateExportTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateExportTaskCommand}.
 */
export interface CreateExportTaskCommandInput extends CreateExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportTaskCommand}.
 */
export interface CreateExportTaskCommandOutput extends CreateExportTaskResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateExportTaskRequest
 *   taskName: "STRING_VALUE",
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamNamePrefix: "STRING_VALUE",
 *   from: Number("long"), // required
 *   to: Number("long"), // required
 *   destination: "STRING_VALUE", // required
 *   destinationPrefix: "STRING_VALUE",
 * };
 * const command = new CreateExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExportTaskCommandInput - {@link CreateExportTaskCommandInput}
 * @returns {@link CreateExportTaskCommandOutput}
 * @see {@link CreateExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateExportTaskCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExportTaskCommandOutput> {
    return de_CreateExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
