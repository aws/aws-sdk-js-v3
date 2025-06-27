// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/models_5";
import {
  de_UpdateEndpointWeightsAndCapacitiesCommand,
  se_UpdateEndpointWeightsAndCapacitiesCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointWeightsAndCapacitiesCommand}.
 */
export interface UpdateEndpointWeightsAndCapacitiesCommandInput extends UpdateEndpointWeightsAndCapacitiesInput {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointWeightsAndCapacitiesCommand}.
 */
export interface UpdateEndpointWeightsAndCapacitiesCommandOutput
  extends UpdateEndpointWeightsAndCapacitiesOutput,
    __MetadataBearer {}

/**
 * <p>Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateEndpointWeightsAndCapacitiesInput
 *   EndpointName: "STRING_VALUE", // required
 *   DesiredWeightsAndCapacities: [ // DesiredWeightAndCapacityList // required
 *     { // DesiredWeightAndCapacity
 *       VariantName: "STRING_VALUE", // required
 *       DesiredWeight: Number("float"),
 *       DesiredInstanceCount: Number("int"),
 *       ServerlessUpdateConfig: { // ProductionVariantServerlessUpdateConfig
 *         MaxConcurrency: Number("int"),
 *         ProvisionedConcurrency: Number("int"),
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateEndpointWeightsAndCapacitiesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointWeightsAndCapacitiesOutput
 * //   EndpointArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEndpointWeightsAndCapacitiesCommandInput - {@link UpdateEndpointWeightsAndCapacitiesCommandInput}
 * @returns {@link UpdateEndpointWeightsAndCapacitiesCommandOutput}
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandOutput} for command's `response` shape.
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
export class UpdateEndpointWeightsAndCapacitiesCommand extends $Command
  .classBuilder<
    UpdateEndpointWeightsAndCapacitiesCommandInput,
    UpdateEndpointWeightsAndCapacitiesCommandOutput,
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
  .s("SageMaker", "UpdateEndpointWeightsAndCapacities", {})
  .n("SageMakerClient", "UpdateEndpointWeightsAndCapacitiesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEndpointWeightsAndCapacitiesCommand)
  .de(de_UpdateEndpointWeightsAndCapacitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEndpointWeightsAndCapacitiesInput;
      output: UpdateEndpointWeightsAndCapacitiesOutput;
    };
    sdk: {
      input: UpdateEndpointWeightsAndCapacitiesCommandInput;
      output: UpdateEndpointWeightsAndCapacitiesCommandOutput;
    };
  };
}
