// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "../models/models_0";
import { de_CreateCapacityProviderCommand, se_CreateCapacityProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandInput extends CreateCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandOutput extends CreateCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
 * 			cluster and are used in capacity provider strategies to facilitate cluster auto
 * 			scaling.</p>
 *          <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on
 * 			Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers.
 * 			These providers are available to all accounts in the Amazon Web Services Regions that Fargate
 * 			supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // CreateCapacityProviderRequest
 *   name: "STRING_VALUE", // required
 *   autoScalingGroupProvider: { // AutoScalingGroupProvider
 *     autoScalingGroupArn: "STRING_VALUE", // required
 *     managedScaling: { // ManagedScaling
 *       status: "ENABLED" || "DISABLED",
 *       targetCapacity: Number("int"),
 *       minimumScalingStepSize: Number("int"),
 *       maximumScalingStepSize: Number("int"),
 *       instanceWarmupPeriod: Number("int"),
 *     },
 *     managedTerminationProtection: "ENABLED" || "DISABLED",
 *     managedDraining: "ENABLED" || "DISABLED",
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityProviderResponse
 * //   capacityProvider: { // CapacityProvider
 * //     capacityProviderArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE",
 * //     autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //       autoScalingGroupArn: "STRING_VALUE", // required
 * //       managedScaling: { // ManagedScaling
 * //         status: "ENABLED" || "DISABLED",
 * //         targetCapacity: Number("int"),
 * //         minimumScalingStepSize: Number("int"),
 * //         maximumScalingStepSize: Number("int"),
 * //         instanceWarmupPeriod: Number("int"),
 * //       },
 * //       managedTerminationProtection: "ENABLED" || "DISABLED",
 * //       managedDraining: "ENABLED" || "DISABLED",
 * //     },
 * //     updateStatus: "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     updateStatusReason: "STRING_VALUE",
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCapacityProviderCommandInput - {@link CreateCapacityProviderCommandInput}
 * @returns {@link CreateCapacityProviderCommandOutput}
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit for the resource was exceeded.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UpdateInProgressException} (client fault)
 *  <p>There's already a current Amazon ECS container agent update in progress on the container
 * 			instance that's specified. If the container agent becomes disconnected while it's in a
 * 			transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update
 * 			process can get stuck in that state. However, when the agent reconnects, it resumes
 * 			where it stopped previously.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To create a capacity provider
 * ```javascript
 * // This example creates a capacity provider that uses the specified Auto Scaling group MyASG and has managed scaling and manager termination protection enabled.
 * const input = {
 *   "name": "MyCapacityProvider",
 *   "autoScalingGroupProvider": {
 *     "autoScalingGroupArn": "arn:aws:autoscaling:us-east-1:123456789012:autoScalingGroup:57ffcb94-11f0-4d6d-bf60-3bac5EXAMPLE:autoScalingGroupName/MyASG",
 *     "managedScaling": {
 *       "status": "ENABLED",
 *       "targetCapacity": 100
 *     },
 *     "managedTerminationProtection": "ENABLED"
 *   }
 * };
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capacityProvider": {
 *     "name": "MyCapacityProvider",
 *     "autoScalingGroupProvider": {
 *       "autoScalingGroupArn": "arn:aws:autoscaling:us-east-1:132456789012:autoScalingGroup:57ffcb94-11f0-4d6d-bf60-3bac5EXAMPLE:autoScalingGroupName/MyASG",
 *       "managedScaling": {
 *         "instanceWarmupPeriod": 300,
 *         "maximumScalingStepSize": 10000,
 *         "minimumScalingStepSize": 1,
 *         "status": "ENABLED",
 *         "targetCapacity": 100
 *       },
 *       "managedTerminationProtection": "ENABLED"
 *     },
 *     "capacityProviderArn": "arn:aws:ecs:us-east-1:123456789012:capacity-provider/MyCapacityProvider",
 *     "status": "ACTIVE",
 *     "tags": []
 *   }
 * }
 * *\/
 * // example id: to-create-a-capacity-provider--1733861347945
 * ```
 *
 */
export class CreateCapacityProviderCommand extends $Command
  .classBuilder<
    CreateCapacityProviderCommandInput,
    CreateCapacityProviderCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "CreateCapacityProvider", {})
  .n("ECSClient", "CreateCapacityProviderCommand")
  .f(void 0, void 0)
  .ser(se_CreateCapacityProviderCommand)
  .de(de_CreateCapacityProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityProviderRequest;
      output: CreateCapacityProviderResponse;
    };
    sdk: {
      input: CreateCapacityProviderCommandInput;
      output: CreateCapacityProviderCommandOutput;
    };
  };
}
