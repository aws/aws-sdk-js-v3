// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DiscoverPollEndpointRequest, DiscoverPollEndpointResponse } from "../models/models_0";
import { de_DiscoverPollEndpointCommand, se_DiscoverPollEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DiscoverPollEndpointCommand}.
 */
export interface DiscoverPollEndpointCommandInput extends DiscoverPollEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverPollEndpointCommand}.
 */
export interface DiscoverPollEndpointCommandOutput extends DiscoverPollEndpointResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DiscoverPollEndpointCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DiscoverPollEndpointRequest
 *   containerInstance: "STRING_VALUE",
 *   cluster: "STRING_VALUE",
 * };
 * const command = new DiscoverPollEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverPollEndpointResponse
 * //   endpoint: "STRING_VALUE",
 * //   telemetryEndpoint: "STRING_VALUE",
 * //   serviceConnectEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DiscoverPollEndpointCommandInput - {@link DiscoverPollEndpointCommandInput}
 * @returns {@link DiscoverPollEndpointCommandOutput}
 * @see {@link DiscoverPollEndpointCommandInput} for command's `input` shape.
 * @see {@link DiscoverPollEndpointCommandOutput} for command's `response` shape.
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
 * 					<code>PROVISIONING</code> per cluster has been reached. For information
 * 					about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS
 * 						service quotas</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 */
export class DiscoverPollEndpointCommand extends $Command
  .classBuilder<
    DiscoverPollEndpointCommandInput,
    DiscoverPollEndpointCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "DiscoverPollEndpoint", {})
  .n("ECSClient", "DiscoverPollEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DiscoverPollEndpointCommand)
  .de(de_DiscoverPollEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DiscoverPollEndpointRequest;
      output: DiscoverPollEndpointResponse;
    };
    sdk: {
      input: DiscoverPollEndpointCommandInput;
      output: DiscoverPollEndpointCommandOutput;
    };
  };
}
