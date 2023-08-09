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

import { ListPipelineExecutionStepsRequest, ListPipelineExecutionStepsResponse } from "../models/models_3";
import { de_ListPipelineExecutionStepsCommand, se_ListPipelineExecutionStepsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineExecutionStepsCommand}.
 */
export interface ListPipelineExecutionStepsCommandInput extends ListPipelineExecutionStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineExecutionStepsCommand}.
 */
export interface ListPipelineExecutionStepsCommandOutput extends ListPipelineExecutionStepsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineExecutionStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineExecutionStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListPipelineExecutionStepsRequest
 *   PipelineExecutionArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListPipelineExecutionStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineExecutionStepsResponse
 * //   PipelineExecutionSteps: [ // PipelineExecutionStepList
 * //     { // PipelineExecutionStep
 * //       StepName: "STRING_VALUE",
 * //       StepDisplayName: "STRING_VALUE",
 * //       StepDescription: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StepStatus: "Starting" || "Executing" || "Stopping" || "Stopped" || "Failed" || "Succeeded",
 * //       CacheHitResult: { // CacheHitResult
 * //         SourcePipelineExecutionArn: "STRING_VALUE",
 * //       },
 * //       AttemptCount: Number("int"),
 * //       FailureReason: "STRING_VALUE",
 * //       Metadata: { // PipelineExecutionStepMetadata
 * //         TrainingJob: { // TrainingJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         ProcessingJob: { // ProcessingJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         TransformJob: { // TransformJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         TuningJob: { // TuningJobStepMetaData
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Model: { // ModelStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         RegisterModel: { // RegisterModelStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Condition: { // ConditionStepMetadata
 * //           Outcome: "True" || "False",
 * //         },
 * //         Callback: { // CallbackStepMetadata
 * //           CallbackToken: "STRING_VALUE",
 * //           SqsQueueUrl: "STRING_VALUE",
 * //           OutputParameters: [ // OutputParameterList
 * //             { // OutputParameter
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         Lambda: { // LambdaStepMetadata
 * //           Arn: "STRING_VALUE",
 * //           OutputParameters: [
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         QualityCheck: { // QualityCheckStepMetadata
 * //           CheckType: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckStatistics: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckConstraints: "STRING_VALUE",
 * //           CalculatedBaselineStatistics: "STRING_VALUE",
 * //           CalculatedBaselineConstraints: "STRING_VALUE",
 * //           ModelPackageGroupName: "STRING_VALUE",
 * //           ViolationReport: "STRING_VALUE",
 * //           CheckJobArn: "STRING_VALUE",
 * //           SkipCheck: true || false,
 * //           RegisterNewBaseline: true || false,
 * //         },
 * //         ClarifyCheck: { // ClarifyCheckStepMetadata
 * //           CheckType: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckConstraints: "STRING_VALUE",
 * //           CalculatedBaselineConstraints: "STRING_VALUE",
 * //           ModelPackageGroupName: "STRING_VALUE",
 * //           ViolationReport: "STRING_VALUE",
 * //           CheckJobArn: "STRING_VALUE",
 * //           SkipCheck: true || false,
 * //           RegisterNewBaseline: true || false,
 * //         },
 * //         EMR: { // EMRStepMetadata
 * //           ClusterId: "STRING_VALUE",
 * //           StepId: "STRING_VALUE",
 * //           StepName: "STRING_VALUE",
 * //           LogFilePath: "STRING_VALUE",
 * //         },
 * //         Fail: { // FailStepMetadata
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         AutoMLJob: { // AutoMLJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       SelectiveExecutionResult: { // SelectiveExecutionResult
 * //         SourcePipelineExecutionArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineExecutionStepsCommandInput - {@link ListPipelineExecutionStepsCommandInput}
 * @returns {@link ListPipelineExecutionStepsCommandOutput}
 * @see {@link ListPipelineExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListPipelineExecutionStepsCommand extends $Command<
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
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
  constructor(readonly input: ListPipelineExecutionStepsCommandInput) {
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
  ): Handler<ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPipelineExecutionStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListPipelineExecutionStepsCommand";
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
  private serialize(input: ListPipelineExecutionStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPipelineExecutionStepsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPipelineExecutionStepsCommandOutput> {
    return de_ListPipelineExecutionStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
