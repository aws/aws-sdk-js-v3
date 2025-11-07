// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopServiceDeploymentRequest, StopServiceDeploymentResponse } from "../models/models_1";
import { StopServiceDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stops an ongoing service deployment.</p>
 *          <p>The following stop types are avaiable:</p>
 *          <ul>
 *             <li>
 *                <p>ROLLBACK - This option rolls back the service deployment to the previous
 * 					service revision. </p>
 *                <p>You can use this option even if you didn't configure the service deployment
 * 					for the rollback option. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/stop-service-deployment.html">Stopping Amazon
 * 				ECS service deployments</a> in the <i>Amazon Elastic Container Service
 * 				Developer Guide</i>.</p>
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
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 * 			resource. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceDeploymentNotFoundException} (client fault)
 *  <p>The service deploy ARN that you specified in the <code>StopServiceDeployment</code>
 * 			doesn't exist. You can use <code>ListServiceDeployments</code> to retrieve the service
 * 			deployment ARNs.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
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
export class StopServiceDeploymentCommand extends $Command
  .classBuilder<
    StopServiceDeploymentCommandInput,
    StopServiceDeploymentCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "StopServiceDeployment", {})
  .n("ECSClient", "StopServiceDeploymentCommand")
  .sc(StopServiceDeployment)
  .build() {
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
