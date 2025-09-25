// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeModelVersionRequest, DescribeModelVersionResponse } from "../models/models_0";
import { DescribeModelVersion } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about a specific machine learning model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeModelVersionCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeModelVersionCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
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
 * //   PriorModelMetrics: "STRING_VALUE",
 * //   RetrainingAvailableDataInDays: Number("int"),
 * //   AutoPromotionResult: "MODEL_PROMOTED" || "MODEL_NOT_PROMOTED" || "RETRAINING_INTERNAL_ERROR" || "RETRAINING_CUSTOMER_ERROR" || "RETRAINING_CANCELLED",
 * //   AutoPromotionResultReason: "STRING_VALUE",
 * //   ModelDiagnosticsOutputConfiguration: { // ModelDiagnosticsOutputConfiguration
 * //     S3OutputConfiguration: { // ModelDiagnosticsS3OutputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   ModelDiagnosticsResultsObject: { // S3Object
 * //     Bucket: "STRING_VALUE", // required
 * //     Key: "STRING_VALUE", // required
 * //   },
 * //   ModelQuality: "QUALITY_THRESHOLD_MET" || "CANNOT_DETERMINE_QUALITY" || "POOR_QUALITY_DETECTED",
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
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @public
 */
export class DescribeModelVersionCommand extends $Command
  .classBuilder<
    DescribeModelVersionCommandInput,
    DescribeModelVersionCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "DescribeModelVersion", {})
  .n("LookoutEquipmentClient", "DescribeModelVersionCommand")
  .sc(DescribeModelVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelVersionRequest;
      output: DescribeModelVersionResponse;
    };
    sdk: {
      input: DescribeModelVersionCommandInput;
      output: DescribeModelVersionCommandOutput;
    };
  };
}
