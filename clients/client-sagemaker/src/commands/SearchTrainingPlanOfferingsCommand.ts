// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTrainingPlanOfferingsRequest, SearchTrainingPlanOfferingsResponse } from "../models/models_5";
import { de_SearchTrainingPlanOfferingsCommand, se_SearchTrainingPlanOfferingsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTrainingPlanOfferingsCommand}.
 */
export interface SearchTrainingPlanOfferingsCommandInput extends SearchTrainingPlanOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link SearchTrainingPlanOfferingsCommand}.
 */
export interface SearchTrainingPlanOfferingsCommandOutput
  extends SearchTrainingPlanOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>Searches for available training plan offerings based on specified criteria. </p> <ul> <li> <p>Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration). </p> </li> <li> <p>And then, they create a plan that best matches their needs using the ID of the plan offering they want to use. </p> </li> </ul> <p>For more information about how to reserve GPU capacity for your SageMaker training jobs or SageMaker HyperPod clusters using Amazon SageMaker Training Plan , see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SearchTrainingPlanOfferingsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SearchTrainingPlanOfferingsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // SearchTrainingPlanOfferingsRequest
 *   InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge",
 *   InstanceCount: Number("int"),
 *   StartTimeAfter: new Date("TIMESTAMP"),
 *   EndTimeBefore: new Date("TIMESTAMP"),
 *   DurationHours: Number("long"), // required
 *   TargetResources: [ // SageMakerResourceNames // required
 *     "training-job" || "hyperpod-cluster",
 *   ],
 * };
 * const command = new SearchTrainingPlanOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // SearchTrainingPlanOfferingsResponse
 * //   TrainingPlanOfferings: [ // TrainingPlanOfferings // required
 * //     { // TrainingPlanOffering
 * //       TrainingPlanOfferingId: "STRING_VALUE", // required
 * //       TargetResources: [ // SageMakerResourceNames // required
 * //         "training-job" || "hyperpod-cluster",
 * //       ],
 * //       RequestedStartTimeAfter: new Date("TIMESTAMP"),
 * //       RequestedEndTimeBefore: new Date("TIMESTAMP"),
 * //       DurationHours: Number("long"),
 * //       DurationMinutes: Number("long"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       ReservedCapacityOfferings: [ // ReservedCapacityOfferings
 * //         { // ReservedCapacityOffering
 * //           InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge", // required
 * //           InstanceCount: Number("int"), // required
 * //           AvailabilityZone: "STRING_VALUE",
 * //           DurationHours: Number("long"),
 * //           DurationMinutes: Number("long"),
 * //           StartTime: new Date("TIMESTAMP"),
 * //           EndTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchTrainingPlanOfferingsCommandInput - {@link SearchTrainingPlanOfferingsCommandInput}
 * @returns {@link SearchTrainingPlanOfferingsCommandOutput}
 * @see {@link SearchTrainingPlanOfferingsCommandInput} for command's `input` shape.
 * @see {@link SearchTrainingPlanOfferingsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class SearchTrainingPlanOfferingsCommand extends $Command
  .classBuilder<
    SearchTrainingPlanOfferingsCommandInput,
    SearchTrainingPlanOfferingsCommandOutput,
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
  .s("SageMaker", "SearchTrainingPlanOfferings", {})
  .n("SageMakerClient", "SearchTrainingPlanOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_SearchTrainingPlanOfferingsCommand)
  .de(de_SearchTrainingPlanOfferingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTrainingPlanOfferingsRequest;
      output: SearchTrainingPlanOfferingsResponse;
    };
    sdk: {
      input: SearchTrainingPlanOfferingsCommandInput;
      output: SearchTrainingPlanOfferingsCommandOutput;
    };
  };
}
