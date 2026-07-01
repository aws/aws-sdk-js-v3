// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedScalingPolicyInput, GetManagedScalingPolicyOutput } from "../models/models_0";
import { GetManagedScalingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
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
 * //     UtilizationPerformanceIndex: Number("int"),
 * //     ScalingStrategy: "DEFAULT" || "ADVANCED",
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
 *
 * @public
 */
export class GetManagedScalingPolicyCommand extends command<GetManagedScalingPolicyCommandInput, GetManagedScalingPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedScalingPolicy",
  GetManagedScalingPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedScalingPolicyInput;
      output: GetManagedScalingPolicyOutput;
    };
    sdk: {
      input: GetManagedScalingPolicyCommandInput;
      output: GetManagedScalingPolicyCommandOutput;
    };
  };
}
