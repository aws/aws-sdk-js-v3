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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeModelVersionRequest, DescribeModelVersionResponse } from "../models/models_0";
import { de_DescribeModelVersionCommand, se_DescribeModelVersionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelVersionCommand}.
 */
export interface DescribeModelVersionCommandInput extends DescribeModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelVersionCommand}.
 */
export interface DescribeModelVersionCommandOutput extends DescribeModelVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a specific machine learning model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeModelVersionCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeModelVersionCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeModelVersionRequest
 *   ModelName: "STRING_VALUE", // required
 *   ModelVersion: Number("long"), // required
 * };
 * const command = new DescribeModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelVersionResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   ModelVersion: Number("long"),
 * //   ModelVersionArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * //   SourceType: "TRAINING" || "RETRAINING" || "IMPORT",
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
 * //   ImportedDataSizeInBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeModelVersionCommandInput - {@link DescribeModelVersionCommandInput}
 * @returns {@link DescribeModelVersionCommandOutput}
 * @see {@link DescribeModelVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelVersionCommandOutput} for command's `response` shape.
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
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related Amazon Web Services service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class DescribeModelVersionCommand extends $Command<
  DescribeModelVersionCommandInput,
  DescribeModelVersionCommandOutput,
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
  constructor(readonly input: DescribeModelVersionCommandInput) {
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
  ): Handler<DescribeModelVersionCommandInput, DescribeModelVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeModelVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeModelVersionCommand";
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
  private serialize(input: DescribeModelVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelVersionCommandOutput> {
    return de_DescribeModelVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
