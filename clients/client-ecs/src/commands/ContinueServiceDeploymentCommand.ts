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
 * Continues or rolls back an Amazon ECS service deployment that is paused at a lifecycle hook.
 *
 * When a service deployment reaches a lifecycle stage that has a `PAUSE` hook configured, the deployment pauses and waits for an explicit action. Use this API to either continue the deployment to the next stage or roll back to the previous service revision.
 *
 * To find the `hookId` of the paused hook, call [DescribeServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html) and inspect the `lifecycleHookDetails` field.
 *
 * For more information, see [Continuing Amazon ECS service deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/continue-service-deployment.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
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
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link ServiceDeploymentNotFoundException} (client fault)
 *
 * The service deploy ARN that you specified in the `ContinueServiceDeployment` doesn't exist. You can use `ListServiceDeployments` to retrieve the service deployment ARNs.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
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
