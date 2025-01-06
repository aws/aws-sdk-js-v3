// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/models_0";
import { de_DescribeCapacityProvidersCommand, se_DescribeCapacityProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandInput extends DescribeCapacityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandOutput extends DescribeCapacityProvidersResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeCapacityProvidersRequest
 *   capacityProviders: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   include: [ // CapacityProviderFieldList
 *     "TAGS",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityProvidersResponse
 * //   capacityProviders: [ // CapacityProviders
 * //     { // CapacityProvider
 * //       capacityProviderArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //         autoScalingGroupArn: "STRING_VALUE", // required
 * //         managedScaling: { // ManagedScaling
 * //           status: "ENABLED" || "DISABLED",
 * //           targetCapacity: Number("int"),
 * //           minimumScalingStepSize: Number("int"),
 * //           maximumScalingStepSize: Number("int"),
 * //           instanceWarmupPeriod: Number("int"),
 * //         },
 * //         managedTerminationProtection: "ENABLED" || "DISABLED",
 * //         managedDraining: "ENABLED" || "DISABLED",
 * //       },
 * //       updateStatus: "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //       updateStatusReason: "STRING_VALUE",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityProvidersCommandInput - {@link DescribeCapacityProvidersCommandInput}
 * @returns {@link DescribeCapacityProvidersCommandOutput}
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *          <p>The following list includes additional causes for the error:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>RunTask</code> could not be processed because you use managed
 * 					scaling and there is a capacity error because the quota of tasks in the
 * 						<code>PROVISIONING</code> per cluster has been reached. For information
 * 					about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS
 * 						service quotas</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To describe all capacity providers
 * ```javascript
 * // This example retrieves details about all capacity providers.
 * const input = {};
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capacityProviders": [
 *     {
 *       "name": "MyCapacityProvider",
 *       "autoScalingGroupProvider": {
 *         "autoScalingGroupArn": "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:a1b2c3d4-5678-90ab-cdef-EXAMPLE11111:autoScalingGroupName/MyAutoScalingGroup",
 *         "managedScaling": {
 *           "maximumScalingStepSize": 1000,
 *           "minimumScalingStepSize": 1,
 *           "status": "ENABLED",
 *           "targetCapacity": 100
 *         },
 *         "managedTerminationProtection": "ENABLED"
 *       },
 *       "capacityProviderArn": "arn:aws:ecs:us-west-2:123456789012:capacity-provider/MyCapacityProvider",
 *       "status": "ACTIVE",
 *       "tags": []
 *     },
 *     {
 *       "name": "FARGATE",
 *       "capacityProviderArn": "arn:aws:ecs:us-west-2:123456789012:capacity-provider/FARGATE",
 *       "status": "ACTIVE",
 *       "tags": []
 *     },
 *     {
 *       "name": "FARGATE_SPOT",
 *       "capacityProviderArn": "arn:aws:ecs:us-west-2:123456789012:capacity-provider/FARGATE_SPOT",
 *       "status": "ACTIVE",
 *       "tags": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-all-capacity-providers-1733951199913
 * ```
 *
 * @example To describe a specific capacity provider
 * ```javascript
 * // This example retrieves details about the capacity provider MyCapacityProvider
 * const input = {
 *   "capacityProviders": [
 *     "MyCapacityProvider"
 *   ],
 *   "include": [
 *     "TAGS"
 *   ]
 * };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capacityProviders": [
 *     {
 *       "name": "MyCapacityProvider",
 *       "autoScalingGroupProvider": {
 *         "autoScalingGroupArn": "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:a1b2c3d4-5678-90ab-cdef-EXAMPLE11111:autoScalingGroupName/MyAutoScalingGroup",
 *         "managedScaling": {
 *           "maximumScalingStepSize": 1000,
 *           "minimumScalingStepSize": 1,
 *           "status": "ENABLED",
 *           "targetCapacity": 100
 *         },
 *         "managedTerminationProtection": "ENABLED"
 *       },
 *       "capacityProviderArn": "arn:aws:ecs:us-west-2:123456789012:capacity-provider/MyCapacityProvider",
 *       "status": "ACTIVE",
 *       "tags": [
 *         {
 *           "key": "environment",
 *           "value": "production"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-specific-capacity-provider-1733951378688
 * ```
 *
 */
export class DescribeCapacityProvidersCommand extends $Command
  .classBuilder<
    DescribeCapacityProvidersCommandInput,
    DescribeCapacityProvidersCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeCapacityProviders", {})
  .n("ECSClient", "DescribeCapacityProvidersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityProvidersCommand)
  .de(de_DescribeCapacityProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityProvidersRequest;
      output: DescribeCapacityProvidersResponse;
    };
    sdk: {
      input: DescribeCapacityProvidersCommandInput;
      output: DescribeCapacityProvidersCommandOutput;
    };
  };
}
