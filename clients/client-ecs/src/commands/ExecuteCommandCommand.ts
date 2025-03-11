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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
 * @example To run a command remotely on a container in a task
 * ```javascript
 * // This example runs an interactive /bin/sh command on a container MyContainer.
 * const input = {
 *   "cluster": "MyCluster",
 *   "command": "/bin/sh",
 *   "container": "MyContainer",
 *   "interactive": true,
 *   "task": "arn:aws:ecs:us-east-1:123456789012:task/MyCluster/d789e94343414c25b9f6bd59eEXAMPLE"
 * };
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "clusterArn": "arn:aws:ecs:us-east-1:123456789012:cluster/MyCluster",
 *   "containerArn": "arn:aws:ecs:us-east-1:123456789012:container/MyCluster/d789e94343414c25b9f6bd59eEXAMPLE/43ba4b77-37f7-4a41-b923-69d4abEXAMPLE",
 *   "containerName": "MyContainer",
 *   "interactive": true,
 *   "session": {
 *     "sessionId": "ecs-execute-command-794nnsxobsg4p2hiur6gxu9a9e",
 *     "streamUrl": "wss://ssmmessages.us-east-1.amazonaws.com/v1/data-channel/ecs-execute-command-794nnsxobsg4p2hiur6gxu9a9e?role=publish_subscribe&cell-number=AAEAAfiZG4oybxqsYj3Zhm15s4J0W1k7d9nxVRenNO8Kl5nzAAAAAGdbWGl479/y/4IrTWPadUic3eBrMu3vmB7aPvI+s12lbpDc142y1KZy",
 *     "tokenValue": "AAEAAcVb7ww10N9aNUI5Cl7K7DbHjbD2Ed4Mw6uaGYIc+UFNAAAAAGdbWGmMDaPbGfDkzrVIhyKEsc4CPT2hcToPU6yzlddPm7rRZvYQtpaAgsvQdjbCAd9OB6ohtDYfqZI9gzMqLKegXq0E+KbDcGPnQVODFNHmQxnR1BvC6vNcHqh6HAJuKnQD7RSYx/J5bfYNHj4hCYHuN0HNcueSDOOTRB/MBt5DBDY7Djv2uzs9FD0N1kcsGljZkZWLuPTVKHHyrU3zh0awfrFFC3RXvgaUCBnloIIvZeq2CjTesxn9JJS+3N4I0DVxfkHdWWBbBY/5+wH82JVTJpqN3yOAt74u/W7TvYBd7Xu2lQbvtpuAnEszl++bFG2ZoV3dfnmBkSnfD/qV1FJcEskbxUHKgmqe0Paouv4zwrQKNfWYfcv9xkWskqcExh07IeaxZz1tp/WegZ5D76sD6xYeuH+35TMNXMoY7oudLgxIXsA7b39ElM7orGi4Jy3W2tLyuNIvDoI2JI6ww4tYdEjYZnld9rhKwV9rDHk1Z8wjHMs++3BIkHrFQRsv7BFUWlZ9lyqO9GWlXeBe7dQtOeFNahBuJUE9z/xLHJn1x13VkdROKqUVHTJrT4sXAnI5roWiGPoQPVY7aHVYJnwjSxrPRWJBsgyHiVN3dAWTmeVMjp0VbOiJaLlpBI+AUWs8OeVRzuJSZ+1alETpK7Ukag7ma9K4lxq/N7IxYo2ub0cG/bvX42zQqdJAW+9St9sQ1QMaMvkSq1tdbLoOuY0QjN7JrkuKLFQA5bhs+o1YwItzIp7bNrzQ9Z9IN51qoGL5HDXQzi1kNFfYtAryhwt6BgtQU9Z0k+RpE+V5G+V68E0MMUvb313f0nRBYj1u5VKonWb708wADPbUU+s7nvbWuD5oLp1Z6A4iqI9Om0R4RrFASj/7fVY7r3raNXcIYA="
 *   },
 *   "taskArn": "arn:aws:ecs:us-east-1:123456789012:task/MyCluster/d789e94343414c25b9f6bd59eEXAMPLE"
 * }
 * *\/
 * // example id: to-run-a-command-remotely-on-a-container-in-a-task-1734037663312
 * ```
 *
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
