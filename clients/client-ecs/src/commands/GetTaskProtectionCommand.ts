// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTaskProtectionRequest, GetTaskProtectionResponse } from "../models/models_0";
import { de_GetTaskProtectionCommand, se_GetTaskProtectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandInput extends GetTaskProtectionRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandOutput extends GetTaskProtectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the protection status of tasks in an Amazon ECS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, GetTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, GetTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // GetTaskProtectionRequest
 *   cluster: "STRING_VALUE", // required
 *   tasks: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskProtectionResponse
 * //   protectedTasks: [ // ProtectedTasks
 * //     { // ProtectedTask
 * //       taskArn: "STRING_VALUE",
 * //       protectionEnabled: true || false,
 * //       expirationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTaskProtectionCommandInput - {@link GetTaskProtectionCommandInput}
 * @returns {@link GetTaskProtectionCommandOutput}
 * @see {@link GetTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link GetTaskProtectionCommandOutput} for command's `response` shape.
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
 * 					<code>PROVISIONING</code> per cluster has been reached. For information
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To get the protection status of a task
 * ```javascript
 * // In this example, we get the protection status for a single task.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "expirationDate": "2022-11-02T06:56:32.553Z",
 *       "protectionEnabled": true,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * // example id: get-the-protection-status-for-a-single-task-2022-11-02T06:56:32.553Z
 * ```
 *
 */
export class GetTaskProtectionCommand extends $Command
  .classBuilder<
    GetTaskProtectionCommandInput,
    GetTaskProtectionCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "GetTaskProtection", {})
  .n("ECSClient", "GetTaskProtectionCommand")
  .f(void 0, void 0)
  .ser(se_GetTaskProtectionCommand)
  .de(de_GetTaskProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaskProtectionRequest;
      output: GetTaskProtectionResponse;
    };
    sdk: {
      input: GetTaskProtectionCommandInput;
      output: GetTaskProtectionCommandOutput;
    };
  };
}
