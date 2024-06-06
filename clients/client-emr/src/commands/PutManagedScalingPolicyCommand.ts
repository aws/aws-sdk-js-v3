// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutManagedScalingPolicyInput, PutManagedScalingPolicyOutput } from "../models/models_0";
import { de_PutManagedScalingPolicyCommand, se_PutManagedScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutManagedScalingPolicyCommand}.
 */
export interface PutManagedScalingPolicyCommandInput extends PutManagedScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutManagedScalingPolicyCommand}.
 */
export interface PutManagedScalingPolicyCommandOutput extends PutManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates a managed scaling policy for an Amazon EMR cluster. The
 *          managed scaling policy defines the limits for resources, such as Amazon EC2
 *          instances that can be added or terminated from a cluster. The policy only applies to the
 *          core and task nodes. The master node cannot be scaled after initial configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // PutManagedScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   ManagedScalingPolicy: { // ManagedScalingPolicy
 *     ComputeLimits: { // ComputeLimits
 *       UnitType: "InstanceFleetUnits" || "Instances" || "VCPU", // required
 *       MinimumCapacityUnits: Number("int"), // required
 *       MaximumCapacityUnits: Number("int"), // required
 *       MaximumOnDemandCapacityUnits: Number("int"),
 *       MaximumCoreCapacityUnits: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutManagedScalingPolicyCommandInput - {@link PutManagedScalingPolicyCommandInput}
 * @returns {@link PutManagedScalingPolicyCommandOutput}
 * @see {@link PutManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class PutManagedScalingPolicyCommand extends $Command
  .classBuilder<
    PutManagedScalingPolicyCommandInput,
    PutManagedScalingPolicyCommandOutput,
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
  .s("ElasticMapReduce", "PutManagedScalingPolicy", {})
  .n("EMRClient", "PutManagedScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutManagedScalingPolicyCommand)
  .de(de_PutManagedScalingPolicyCommand)
  .build() {}
