// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ContinueServiceDeploymentRequest, ContinueServiceDeploymentResponse } from "../models/models_0";
import { ContinueServiceDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ContinueServiceDeploymentCommand}.
 */
export interface ContinueServiceDeploymentCommandInput extends ContinueServiceDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link ContinueServiceDeploymentCommand}.
 */
export interface ContinueServiceDeploymentCommandOutput extends ContinueServiceDeploymentResponse, __MetadataBearer {}

/**
 * <p>Continues or rolls back an Amazon ECS service deployment that is paused at a lifecycle hook.</p> <p>When a service deployment reaches a lifecycle stage that has a <code>PAUSE</code> hook configured, the deployment pauses and waits for an explicit action. Use this API to either continue the deployment to the next stage or roll back to the previous service revision.</p> <p>To find the <code>hookId</code> of the paused hook, call <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html">DescribeServiceDeployments</a> and inspect the <code>lifecycleHookDetails</code> field.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/continue-service-deployment.html">Continuing Amazon ECS service deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ContinueServiceDeploymentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ContinueServiceDeploymentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ContinueServiceDeploymentRequest
 *   serviceDeploymentArn: "STRING_VALUE", // required
 *   hookId: "STRING_VALUE", // required
 *   action: "ROLLBACK" || "CONTINUE",
 * };
 * const command = new ContinueServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // ContinueServiceDeploymentResponse
 * //   serviceDeploymentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ContinueServiceDeploymentCommandInput - {@link ContinueServiceDeploymentCommandInput}
 * @returns {@link ContinueServiceDeploymentCommandOutput}
 * @see {@link ContinueServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link ContinueServiceDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceDeploymentNotFoundException} (client fault)
 *  <p>The service deploy ARN that you specified in the <code>ContinueServiceDeployment</code> doesn't exist. You can use <code>ListServiceDeployments</code> to retrieve the service deployment ARNs.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To continue a paused service deployment
 * ```javascript
 * // This example continues a service deployment that is paused at a lifecycle hook, using the CONTINUE action to proceed to the next deployment stage.
 * const input = {
 *   action: "CONTINUE",
 *   hookId: "ecs-pause-Xk7rT2mP9sLwQn4vB8fYd3hJ6gA1cE5iO0uR_ZpWq",
 *   serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r"
 * };
 * const command = new ContinueServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r"
 * }
 * *\/
 * ```
 *
 * @example To roll back a paused service deployment
 * ```javascript
 * // This example rolls back a service deployment that is paused at a lifecycle hook, using the ROLLBACK action to revert to the previous service revision.
 * const input = {
 *   action: "ROLLBACK",
 *   hookId: "ecs-pause-Xk7rT2mP9sLwQn4vB8fYd3hJ6gA1cE5iO0uR_ZpWq",
 *   serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r"
 * };
 * const command = new ContinueServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ContinueServiceDeploymentCommand extends command<ContinueServiceDeploymentCommandInput, ContinueServiceDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "ContinueServiceDeployment",
  ContinueServiceDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ContinueServiceDeploymentRequest;
      output: ContinueServiceDeploymentResponse;
    };
    sdk: {
      input: ContinueServiceDeploymentCommandInput;
      output: ContinueServiceDeploymentCommandOutput;
    };
  };
}
