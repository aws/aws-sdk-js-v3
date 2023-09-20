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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeModelRequest, DescribeModelResponse } from "../models/models_0";
import { de_DescribeModelCommand, se_DescribeModelCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandInput extends DescribeModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandOutput extends DescribeModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a JSON containing the overall information about a specific machine learning
 *          model, including model name and ARN, dataset, training and evaluation information, status,
 *          and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeModelRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   DatasetName: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * //   LabelsInputConfiguration: { // LabelsInputConfiguration
 * //     S3InputConfiguration: { // LabelsS3InputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //     LabelGroupName: "STRING_VALUE",
 * //   },
 * //   TrainingDataStartTime: new Date("TIMESTAMP"),
 * //   TrainingDataEndTime: new Date("TIMESTAMP"),
 * //   EvaluationDataStartTime: new Date("TIMESTAMP"),
 * //   EvaluationDataEndTime: new Date("TIMESTAMP"),
 * //   RoleArn: "STRING_VALUE",
 * //   DataPreProcessingConfiguration: { // DataPreProcessingConfiguration
 * //     TargetSamplingRate: "PT1S" || "PT5S" || "PT10S" || "PT15S" || "PT30S" || "PT1M" || "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 * //   },
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * //   TrainingExecutionStartTime: new Date("TIMESTAMP"),
 * //   TrainingExecutionEndTime: new Date("TIMESTAMP"),
 * //   FailedReason: "STRING_VALUE",
 * //   ModelMetrics: "STRING_VALUE",
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ServerSideKmsKeyId: "STRING_VALUE",
 * //   OffCondition: "STRING_VALUE",
 * //   SourceModelVersionArn: "STRING_VALUE",
 * //   ImportJobStartTime: new Date("TIMESTAMP"),
 * //   ImportJobEndTime: new Date("TIMESTAMP"),
 * //   ActiveModelVersion: Number("long"),
 * //   ActiveModelVersionArn: "STRING_VALUE",
 * //   ModelVersionActivatedAt: new Date("TIMESTAMP"),
 * //   PreviousActiveModelVersion: Number("long"),
 * //   PreviousActiveModelVersionArn: "STRING_VALUE",
 * //   PreviousModelVersionActivatedAt: new Date("TIMESTAMP"),
 * //   PriorModelMetrics: "STRING_VALUE",
 * //   LatestScheduledRetrainingFailedReason: "STRING_VALUE",
 * //   LatestScheduledRetrainingStatus: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * //   LatestScheduledRetrainingModelVersion: Number("long"),
 * //   LatestScheduledRetrainingStartTime: new Date("TIMESTAMP"),
 * //   LatestScheduledRetrainingAvailableDataInDays: Number("int"),
 * //   NextScheduledRetrainingStartDate: new Date("TIMESTAMP"),
 * //   AccumulatedInferenceDataStartTime: new Date("TIMESTAMP"),
 * //   AccumulatedInferenceDataEndTime: new Date("TIMESTAMP"),
 * //   RetrainingSchedulerStatus: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param DescribeModelCommandInput - {@link DescribeModelCommandInput}
 * @returns {@link DescribeModelCommandOutput}
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class DescribeModelCommand extends $Command<
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: DescribeModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelCommandInput, DescribeModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "DescribeModel",
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
  private serialize(input: DescribeModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelCommandOutput> {
    return de_DescribeModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
