// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { ListJobsRequest, ListJobsResult } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for
 *          the Amazon Web Services account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>Related actions include:</p>
 *          <p></p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListJobsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListJobsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListJobsRequest
 *   AccountId: "STRING_VALUE",
 *   JobStatuses: [ // JobStatusList
 *     "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResult
 * //   NextToken: "STRING_VALUE",
 * //   Jobs: [ // JobListDescriptorList
 * //     { // JobListDescriptor
 * //       JobId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Operation: "LambdaInvoke" || "S3PutObjectCopy" || "S3PutObjectAcl" || "S3PutObjectTagging" || "S3DeleteObjectTagging" || "S3InitiateRestoreObject" || "S3PutObjectLegalHold" || "S3PutObjectRetention" || "S3ReplicateObject",
 * //       Priority: Number("int"),
 * //       Status: "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationDate: new Date("TIMESTAMP"),
 * //       ProgressSummary: { // JobProgressSummary
 * //         TotalNumberOfTasks: Number("long"),
 * //         NumberOfTasksSucceeded: Number("long"),
 * //         NumberOfTasksFailed: Number("long"),
 * //         Timers: { // JobTimers
 * //           ElapsedTimeInActiveSeconds: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class ListJobsCommand extends $Command<
  ListJobsCommandInput,
  ListJobsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListJobsCommand";
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
  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return de_ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
