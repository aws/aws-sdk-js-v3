// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelCustomizationJobRequest, GetModelCustomizationJobResponse } from "../models/models_0";
import { de_GetModelCustomizationJobCommand, se_GetModelCustomizationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelCustomizationJobCommand}.
 */
export interface GetModelCustomizationJobCommandInput extends GetModelCustomizationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetModelCustomizationJobCommand}.
 */
export interface GetModelCustomizationJobCommandOutput extends GetModelCustomizationJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the properties associated with a model-customization job, including the status of the job.
 *          For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelCustomizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelCustomizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetModelCustomizationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetModelCustomizationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetModelCustomizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   outputModelName: "STRING_VALUE", // required
 * //   outputModelArn: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //   failureMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   baseModelArn: "STRING_VALUE", // required
 * //   hyperParameters: { // ModelCustomizationHyperParameters // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   trainingDataConfig: { // TrainingDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   validationDataConfig: { // ValidationDataConfig
 * //     validators: [ // Validators // required
 * //       { // Validator
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   outputDataConfig: { // OutputDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING",
 * //   outputModelKmsKeyArn: "STRING_VALUE",
 * //   trainingMetrics: { // TrainingMetrics
 * //     trainingLoss: Number("float"),
 * //   },
 * //   validationMetrics: [ // ValidationMetrics
 * //     { // ValidatorMetric
 * //       validationLoss: Number("float"),
 * //     },
 * //   ],
 * //   vpcConfig: { // VpcConfig
 * //     subnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetModelCustomizationJobCommandInput - {@link GetModelCustomizationJobCommandInput}
 * @returns {@link GetModelCustomizationJobCommandOutput}
 * @see {@link GetModelCustomizationJobCommandInput} for command's `input` shape.
 * @see {@link GetModelCustomizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class GetModelCustomizationJobCommand extends $Command
  .classBuilder<
    GetModelCustomizationJobCommandInput,
    GetModelCustomizationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetModelCustomizationJob", {})
  .n("BedrockClient", "GetModelCustomizationJobCommand")
  .f(void 0, void 0)
  .ser(se_GetModelCustomizationJobCommand)
  .de(de_GetModelCustomizationJobCommand)
  .build() {}
