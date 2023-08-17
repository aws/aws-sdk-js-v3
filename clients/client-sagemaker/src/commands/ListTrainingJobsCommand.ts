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

import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_3";
import { de_ListTrainingJobsCommand, se_ListTrainingJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrainingJobsCommand}.
 */
export interface ListTrainingJobsCommandInput extends ListTrainingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainingJobsCommand}.
 */
export interface ListTrainingJobsCommandOutput extends ListTrainingJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists training jobs.</p>
 *          <note>
 *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
 *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
 *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
 *                     <code>StatusEquals</code> parameter, which is returned as a response.</p>
 *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following
 *                 parameters:</p>
 *             <p>
 *                <code>\{ ... MaxResults: 100, StatusEquals: InProgress ... \}</code>
 *             </p>
 *             <p>First, 100 trainings jobs with any status, including those other than
 *                     <code>InProgress</code>, are selected (sorted according to the creation time,
 *                 from the most current to the oldest). Next, those with a status of
 *                     <code>InProgress</code> are returned.</p>
 *             <p>You can quickly test the API using the following Amazon Web Services CLI
 *                 code.</p>
 *             <p>
 *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
 *                     InProgress</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListTrainingJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   WarmPoolStatusEquals: "Available" || "Terminated" || "Reused" || "InUse",
 * };
 * const command = new ListTrainingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainingJobsResponse
 * //   TrainingJobSummaries: [ // TrainingJobSummaries // required
 * //     { // TrainingJobSummary
 * //       TrainingJobName: "STRING_VALUE", // required
 * //       TrainingJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       TrainingEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TrainingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       WarmPoolStatus: { // WarmPoolStatus
 * //         Status: "Available" || "Terminated" || "Reused" || "InUse", // required
 * //         ResourceRetainedBillableTimeInSeconds: Number("int"),
 * //         ReusedByJob: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrainingJobsCommandInput - {@link ListTrainingJobsCommandInput}
 * @returns {@link ListTrainingJobsCommandOutput}
 * @see {@link ListTrainingJobsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListTrainingJobsCommand extends $Command<
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListTrainingJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrainingJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrainingJobsCommand";
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
  private serialize(input: ListTrainingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrainingJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrainingJobsCommandOutput> {
    return de_ListTrainingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
