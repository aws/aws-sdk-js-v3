// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrainingPlanRequest, DescribeTrainingPlanResponse } from "../models/models_3";
import { de_DescribeTrainingPlanCommand, se_DescribeTrainingPlanCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrainingPlanCommand}.
 */
export interface DescribeTrainingPlanCommandInput extends DescribeTrainingPlanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrainingPlanCommand}.
 */
export interface DescribeTrainingPlanCommandOutput extends DescribeTrainingPlanResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific training plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTrainingPlanRequest
 *   TrainingPlanName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrainingPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrainingPlanResponse
 * //   TrainingPlanArn: "STRING_VALUE", // required
 * //   TrainingPlanName: "STRING_VALUE", // required
 * //   Status: "Pending" || "Active" || "Scheduled" || "Expired" || "Failed", // required
 * //   StatusMessage: "STRING_VALUE",
 * //   DurationHours: Number("long"),
 * //   DurationMinutes: Number("long"),
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   UpfrontFee: "STRING_VALUE",
 * //   CurrencyCode: "STRING_VALUE",
 * //   TotalInstanceCount: Number("int"),
 * //   AvailableInstanceCount: Number("int"),
 * //   InUseInstanceCount: Number("int"),
 * //   TargetResources: [ // SageMakerResourceNames
 * //     "training-job" || "hyperpod-cluster",
 * //   ],
 * //   ReservedCapacitySummaries: [ // ReservedCapacitySummaries
 * //     { // ReservedCapacitySummary
 * //       ReservedCapacityArn: "STRING_VALUE", // required
 * //       InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge", // required
 * //       TotalInstanceCount: Number("int"), // required
 * //       Status: "Pending" || "Active" || "Scheduled" || "Expired" || "Failed", // required
 * //       AvailabilityZone: "STRING_VALUE",
 * //       DurationHours: Number("long"),
 * //       DurationMinutes: Number("long"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrainingPlanCommandInput - {@link DescribeTrainingPlanCommandInput}
 * @returns {@link DescribeTrainingPlanCommandOutput}
 * @see {@link DescribeTrainingPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingPlanCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeTrainingPlanCommand extends $Command
  .classBuilder<
    DescribeTrainingPlanCommandInput,
    DescribeTrainingPlanCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeTrainingPlan", {})
  .n("SageMakerClient", "DescribeTrainingPlanCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrainingPlanCommand)
  .de(de_DescribeTrainingPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrainingPlanRequest;
      output: DescribeTrainingPlanResponse;
    };
    sdk: {
      input: DescribeTrainingPlanCommandInput;
      output: DescribeTrainingPlanCommandOutput;
    };
  };
}
