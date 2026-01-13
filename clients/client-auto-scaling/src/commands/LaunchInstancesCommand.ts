// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchInstancesRequest, LaunchInstancesResult } from "../models/models_0";
import { LaunchInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LaunchInstancesCommand}.
 */
export interface LaunchInstancesCommandInput extends LaunchInstancesRequest {}
/**
 * @public
 *
 * The output of {@link LaunchInstancesCommand}.
 */
export interface LaunchInstancesCommandOutput extends LaunchInstancesResult, __MetadataBearer {}

/**
 * <p> Launches a specified number of instances in an Auto Scaling group. Returns instance IDs and
 *             other details if launch is successful or error details if launch is unsuccessful. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, LaunchInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, LaunchInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // LaunchInstancesRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   RequestedCapacity: Number("int"), // required
 *   ClientToken: "STRING_VALUE", // required
 *   AvailabilityZones: [ // AvailabilityZonesLimit1
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZoneIds: [ // AvailabilityZoneIdsLimit1
 *     "STRING_VALUE",
 *   ],
 *   SubnetIds: [ // SubnetIdsLimit1
 *     "STRING_VALUE",
 *   ],
 *   RetryStrategy: "retry-with-group-configuration" || "none",
 * };
 * const command = new LaunchInstancesCommand(input);
 * const response = await client.send(command);
 * // { // LaunchInstancesResult
 * //   AutoScalingGroupName: "STRING_VALUE",
 * //   ClientToken: "STRING_VALUE",
 * //   Instances: [ // InstanceCollections
 * //     { // InstanceCollection
 * //       InstanceType: "STRING_VALUE",
 * //       MarketType: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       InstanceIds: [ // InstanceIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Errors: [ // LaunchInstancesErrors
 * //     { // LaunchInstancesError
 * //       InstanceType: "STRING_VALUE",
 * //       MarketType: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param LaunchInstancesCommandInput - {@link LaunchInstancesCommandInput}
 * @returns {@link LaunchInstancesCommandOutput}
 * @see {@link LaunchInstancesCommandInput} for command's `input` shape.
 * @see {@link LaunchInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchError} (client fault)
 *  <p>
 *             Indicates that the parameters in the current request do not match the parameters from a previous request with the same client token within the idempotency window.
 *         </p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @public
 */
export class LaunchInstancesCommand extends $Command
  .classBuilder<
    LaunchInstancesCommandInput,
    LaunchInstancesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "LaunchInstances", {})
  .n("AutoScalingClient", "LaunchInstancesCommand")
  .sc(LaunchInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LaunchInstancesRequest;
      output: LaunchInstancesResult;
    };
    sdk: {
      input: LaunchInstancesCommandInput;
      output: LaunchInstancesCommandOutput;
    };
  };
}
