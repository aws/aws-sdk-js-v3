// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlowDefinitionRequest, DescribeFlowDefinitionResponse } from "../models/models_2";
import { de_DescribeFlowDefinitionCommand, se_DescribeFlowDefinitionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowDefinitionCommand}.
 */
export interface DescribeFlowDefinitionCommandInput extends DescribeFlowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowDefinitionCommand}.
 */
export interface DescribeFlowDefinitionCommandOutput extends DescribeFlowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFlowDefinitionRequest
 *   FlowDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowDefinitionResponse
 * //   FlowDefinitionArn: "STRING_VALUE", // required
 * //   FlowDefinitionName: "STRING_VALUE", // required
 * //   FlowDefinitionStatus: "Initializing" || "Active" || "Failed" || "Deleting", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   HumanLoopRequestSource: { // HumanLoopRequestSource
 * //     AwsManagedHumanLoopRequestSource: "AWS/Rekognition/DetectModerationLabels/Image/V3" || "AWS/Textract/AnalyzeDocument/Forms/V1", // required
 * //   },
 * //   HumanLoopActivationConfig: { // HumanLoopActivationConfig
 * //     HumanLoopActivationConditionsConfig: { // HumanLoopActivationConditionsConfig
 * //       HumanLoopActivationConditions: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   HumanLoopConfig: { // HumanLoopConfig
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     HumanTaskUiArn: "STRING_VALUE", // required
 * //     TaskTitle: "STRING_VALUE", // required
 * //     TaskDescription: "STRING_VALUE", // required
 * //     TaskCount: Number("int"), // required
 * //     TaskAvailabilityLifetimeInSeconds: Number("int"),
 * //     TaskTimeLimitInSeconds: Number("int"),
 * //     TaskKeywords: [ // FlowDefinitionTaskKeywords
 * //       "STRING_VALUE",
 * //     ],
 * //     PublicWorkforceTaskPrice: { // PublicWorkforceTaskPrice
 * //       AmountInUsd: { // USD
 * //         Dollars: Number("int"),
 * //         Cents: Number("int"),
 * //         TenthFractionsOfACent: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   OutputConfig: { // FlowDefinitionOutputConfig
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE", // required
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFlowDefinitionCommandInput - {@link DescribeFlowDefinitionCommandInput}
 * @returns {@link DescribeFlowDefinitionCommandOutput}
 * @see {@link DescribeFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeFlowDefinitionCommand extends $Command
  .classBuilder<
    DescribeFlowDefinitionCommandInput,
    DescribeFlowDefinitionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeFlowDefinition", {})
  .n("SageMakerClient", "DescribeFlowDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFlowDefinitionCommand)
  .de(de_DescribeFlowDefinitionCommand)
  .build() {}
