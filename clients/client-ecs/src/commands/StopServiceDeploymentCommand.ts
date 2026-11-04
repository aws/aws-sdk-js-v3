// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopServiceDeploymentRequest, StopServiceDeploymentResponse } from "../models/models_1";
import { StopServiceDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopServiceDeploymentCommand}.
 */
export interface StopServiceDeploymentCommandInput extends StopServiceDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StopServiceDeploymentCommand}.
 */
export interface StopServiceDeploymentCommandOutput extends StopServiceDeploymentResponse, __MetadataBearer {}

/**
 * Stops an ongoing service deployment.
 *
 * The following stop types are avaiable:
 *
 * - ROLLBACK - This option rolls back the service deployment to the previous service revision.
 *
 *   You can use this option even if you didn't configure the service deployment for the rollback option.
 *
 * For more information, see [Stopping Amazon ECS service deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/stop-service-deployment.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StopServiceDeploymentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StopServiceDeploymentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // StopServiceDeploymentRequest
 *   serviceDeploymentArn: "STRING_VALUE", // required
 *   stopType: "ABORT" || "ROLLBACK",
 * };
 * const command = new StopServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StopServiceDeploymentResponse
 * //   serviceDeploymentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopServiceDeploymentCommandInput - {@link StopServiceDeploymentCommandInput}
 * @returns {@link StopServiceDeploymentCommandOutput}
 * @see {@link StopServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopServiceDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
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
 * @example To stop a service deployment
 * ```javascript
 * // This example stops the service deployment using the ROLLBACK option.
 * const input = {
 *   serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r",
 *   stopType: "ROLLBACK"
 * };
 * const command = new StopServiceDeploymentCommand(input);
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
export class StopServiceDeploymentCommand extends command<StopServiceDeploymentCommandInput, StopServiceDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "StopServiceDeployment",
  StopServiceDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopServiceDeploymentRequest;
      output: StopServiceDeploymentResponse;
    };
    sdk: {
      input: StopServiceDeploymentCommandInput;
      output: StopServiceDeploymentCommandOutput;
    };
  };
}
