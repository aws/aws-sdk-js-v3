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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/models_3";
import {
  de_ListHyperParameterTuningJobsCommand,
  se_ListHyperParameterTuningJobsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHyperParameterTuningJobsCommand}.
 */
export interface ListHyperParameterTuningJobsCommandInput extends ListHyperParameterTuningJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListHyperParameterTuningJobsCommand}.
 */
export interface ListHyperParameterTuningJobsCommandOutput
  extends ListHyperParameterTuningJobsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that
 *             describe
 *             the hyperparameter tuning jobs launched in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHyperParameterTuningJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHyperParameterTuningJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListHyperParameterTuningJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortBy: "Name" || "Status" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   StatusEquals: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping",
 * };
 * const command = new ListHyperParameterTuningJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListHyperParameterTuningJobsResponse
 * //   HyperParameterTuningJobSummaries: [ // HyperParameterTuningJobSummaries // required
 * //     { // HyperParameterTuningJobSummary
 * //       HyperParameterTuningJobName: "STRING_VALUE", // required
 * //       HyperParameterTuningJobArn: "STRING_VALUE", // required
 * //       HyperParameterTuningJobStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //       Strategy: "Bayesian" || "Random" || "Hyperband" || "Grid", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       HyperParameterTuningEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TrainingJobStatusCounters: { // TrainingJobStatusCounters
 * //         Completed: Number("int"),
 * //         InProgress: Number("int"),
 * //         RetryableError: Number("int"),
 * //         NonRetryableError: Number("int"),
 * //         Stopped: Number("int"),
 * //       },
 * //       ObjectiveStatusCounters: { // ObjectiveStatusCounters
 * //         Succeeded: Number("int"),
 * //         Pending: Number("int"),
 * //         Failed: Number("int"),
 * //       },
 * //       ResourceLimits: { // ResourceLimits
 * //         MaxNumberOfTrainingJobs: Number("int"),
 * //         MaxParallelTrainingJobs: Number("int"), // required
 * //         MaxRuntimeInSeconds: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHyperParameterTuningJobsCommandInput - {@link ListHyperParameterTuningJobsCommandInput}
 * @returns {@link ListHyperParameterTuningJobsCommandOutput}
 * @see {@link ListHyperParameterTuningJobsCommandInput} for command's `input` shape.
 * @see {@link ListHyperParameterTuningJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListHyperParameterTuningJobsCommand extends $Command<
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
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
  constructor(readonly input: ListHyperParameterTuningJobsCommandInput) {
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
  ): Handler<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHyperParameterTuningJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHyperParameterTuningJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListHyperParameterTuningJobs",
      },
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
  private serialize(input: ListHyperParameterTuningJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHyperParameterTuningJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHyperParameterTuningJobsCommandOutput> {
    return de_ListHyperParameterTuningJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
