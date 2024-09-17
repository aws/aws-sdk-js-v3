// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExecuteCommandRequest,
  ExecuteCommandResponse,
  ExecuteCommandResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ExecuteCommandCommand, se_ExecuteCommandCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteCommandCommand}.
 */
export interface ExecuteCommandCommandInput extends ExecuteCommandRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteCommandCommand}.
 */
export interface ExecuteCommandCommandOutput extends ExecuteCommandResponse, __MetadataBearer {}

/**
 * <p>Runs a command remotely on a container within a task.</p>
 *          <p>If you use a condition key in your IAM policy to refine the conditions for the
 * 			policy statement, for example limit the actions to a specific cluster, you receive an
 * 				<code>AccessDeniedException</code> when there is a mismatch between the condition
 * 			key value and the corresponding parameter value.</p>
 *          <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS
 * 				Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ExecuteCommandCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ExecuteCommandCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ExecuteCommandRequest
 *   cluster: "STRING_VALUE",
 *   container: "STRING_VALUE",
 *   command: "STRING_VALUE", // required
 *   interactive: true || false, // required
 *   task: "STRING_VALUE", // required
 * };
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteCommandResponse
 * //   clusterArn: "STRING_VALUE",
 * //   containerArn: "STRING_VALUE",
 * //   containerName: "STRING_VALUE",
 * //   interactive: true || false,
 * //   session: { // Session
 * //     sessionId: "STRING_VALUE",
 * //     streamUrl: "STRING_VALUE",
 * //     tokenValue: "STRING_VALUE",
 * //   },
 * //   taskArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteCommandCommandInput - {@link ExecuteCommandCommandInput}
 * @returns {@link ExecuteCommandCommandOutput}
 * @see {@link ExecuteCommandCommandInput} for command's `input` shape.
 * @see {@link ExecuteCommandCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
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
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link TargetNotConnectedException} (client fault)
 *  <p>The execute command cannot run. This error can be caused by any of the following
 * 			configuration issues:</p>
 *          <ul>
 *             <li>
 *                <p>Incorrect IAM permissions</p>
 *             </li>
 *             <li>
 *                <p>The SSM agent is not installed or is not running</p>
 *             </li>
 *             <li>
 *                <p> There is an interface Amazon VPC endpoint for Amazon ECS, but there is not one for
 * 					Systems Manager Session Manager</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to troubleshoot the issues, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Troubleshooting issues with ECS
 * 				Exec</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 */
export class ExecuteCommandCommand extends $Command
  .classBuilder<
    ExecuteCommandCommandInput,
    ExecuteCommandCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "ExecuteCommand", {})
  .n("ECSClient", "ExecuteCommandCommand")
  .f(void 0, ExecuteCommandResponseFilterSensitiveLog)
  .ser(se_ExecuteCommandCommand)
  .de(de_ExecuteCommandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteCommandRequest;
      output: ExecuteCommandResponse;
    };
    sdk: {
      input: ExecuteCommandCommandInput;
      output: ExecuteCommandCommandOutput;
    };
  };
}
