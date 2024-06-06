// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedScalingPolicyInput, GetManagedScalingPolicyOutput } from "../models/models_0";
import { de_GetManagedScalingPolicyCommand, se_GetManagedScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedScalingPolicyCommand}.
 */
export interface GetManagedScalingPolicyCommandInput extends GetManagedScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetManagedScalingPolicyCommand}.
 */
export interface GetManagedScalingPolicyCommandOutput extends GetManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * <p>Fetches the attached managed scaling policy for an Amazon EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetManagedScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedScalingPolicyOutput
 * //   ManagedScalingPolicy: { // ManagedScalingPolicy
 * //     ComputeLimits: { // ComputeLimits
 * //       UnitType: "InstanceFleetUnits" || "Instances" || "VCPU", // required
 * //       MinimumCapacityUnits: Number("int"), // required
 * //       MaximumCapacityUnits: Number("int"), // required
 * //       MaximumOnDemandCapacityUnits: Number("int"),
 * //       MaximumCoreCapacityUnits: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedScalingPolicyCommandInput - {@link GetManagedScalingPolicyCommandInput}
 * @returns {@link GetManagedScalingPolicyCommandOutput}
 * @see {@link GetManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class GetManagedScalingPolicyCommand extends $Command
  .classBuilder<
    GetManagedScalingPolicyCommandInput,
    GetManagedScalingPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "GetManagedScalingPolicy", {})
  .n("EMRClient", "GetManagedScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedScalingPolicyCommand)
  .de(de_GetManagedScalingPolicyCommand)
  .build() {}
