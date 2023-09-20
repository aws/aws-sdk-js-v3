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

import {
  ListTrainingJobsForHyperParameterTuningJobRequest,
  ListTrainingJobsForHyperParameterTuningJobResponse,
} from "../models/models_3";
import {
  de_ListTrainingJobsForHyperParameterTuningJobCommand,
  se_ListTrainingJobsForHyperParameterTuningJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrainingJobsForHyperParameterTuningJobCommand}.
 */
export interface ListTrainingJobsForHyperParameterTuningJobCommandInput
  extends ListTrainingJobsForHyperParameterTuningJobRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainingJobsForHyperParameterTuningJobCommand}.
 */
export interface ListTrainingJobsForHyperParameterTuningJobCommandOutput
  extends ListTrainingJobsForHyperParameterTuningJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that a
 *             hyperparameter tuning job launched.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListTrainingJobsForHyperParameterTuningJobRequest
 *   HyperParameterTuningJobName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   SortBy: "Name" || "CreationTime" || "Status" || "FinalObjectiveMetricValue",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListTrainingJobsForHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainingJobsForHyperParameterTuningJobResponse
 * //   TrainingJobSummaries: [ // HyperParameterTrainingJobSummaries // required
 * //     { // HyperParameterTrainingJobSummary
 * //       TrainingJobDefinitionName: "STRING_VALUE",
 * //       TrainingJobName: "STRING_VALUE", // required
 * //       TrainingJobArn: "STRING_VALUE", // required
 * //       TuningJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       TrainingStartTime: new Date("TIMESTAMP"),
 * //       TrainingEndTime: new Date("TIMESTAMP"),
 * //       TrainingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       TunedHyperParameters: { // HyperParameters // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //       FinalHyperParameterTuningJobObjectiveMetric: { // FinalHyperParameterTuningJobObjectiveMetric
 * //         Type: "Maximize" || "Minimize",
 * //         MetricName: "STRING_VALUE", // required
 * //         Value: Number("float"), // required
 * //       },
 * //       ObjectiveStatus: "Succeeded" || "Pending" || "Failed",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrainingJobsForHyperParameterTuningJobCommandInput - {@link ListTrainingJobsForHyperParameterTuningJobCommandInput}
 * @returns {@link ListTrainingJobsForHyperParameterTuningJobCommandOutput}
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListTrainingJobsForHyperParameterTuningJobCommand extends $Command<
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
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
  constructor(readonly input: ListTrainingJobsForHyperParameterTuningJobCommandInput) {
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
  ): Handler<
    ListTrainingJobsForHyperParameterTuningJobCommandInput,
    ListTrainingJobsForHyperParameterTuningJobCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListTrainingJobsForHyperParameterTuningJobCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrainingJobsForHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListTrainingJobsForHyperParameterTuningJob",
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
  private serialize(
    input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListTrainingJobsForHyperParameterTuningJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> {
    return de_ListTrainingJobsForHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
