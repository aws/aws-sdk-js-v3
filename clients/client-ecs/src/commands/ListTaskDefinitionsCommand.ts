// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTaskDefinitionsRequest, ListTaskDefinitionsResponse } from "../models/models_0";
import { de_ListTaskDefinitionsCommand, se_ListTaskDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandInput extends ListTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskDefinitionsCommand}.
 */
export interface ListTaskDefinitionsCommandOutput extends ListTaskDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of task definitions that are registered to your account. You can filter
 * 			the results by family name with the <code>familyPrefix</code> parameter or by status
 * 			with the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECSClient(config);
 * const input = { // ListTaskDefinitionsRequest
 *   familyPrefix: "STRING_VALUE",
 *   status: "ACTIVE" || "INACTIVE" || "DELETE_IN_PROGRESS",
 *   sort: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskDefinitionsResponse
 * //   taskDefinitionArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskDefinitionsCommandInput - {@link ListTaskDefinitionsCommandInput}
 * @returns {@link ListTaskDefinitionsCommandOutput}
 * @see {@link ListTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionsCommandOutput} for command's `response` shape.
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
 * @example To list your registered task definitions
 * ```javascript
 * // This example lists all of your registered task definitions.
 * const input = {};
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinitionArns": [
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep300:2",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
 *   ]
 * }
 * *\/
 * // example id: b381ebaf-7eba-4d60-b99b-7f6ae49d3d60
 * ```
 *
 * @example To list the registered task definitions in a family
 * ```javascript
 * // This example lists the task definition revisions of a specified family.
 * const input = {
 *   "familyPrefix": "wordpress"
 * };
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinitionArns": [
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
 *   ]
 * }
 * *\/
 * // example id: 734e7afd-753a-4bc2-85d0-badddce10910
 * ```
 *
 */
export class ListTaskDefinitionsCommand extends $Command
  .classBuilder<
    ListTaskDefinitionsCommandInput,
    ListTaskDefinitionsCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "ListTaskDefinitions", {})
  .n("ECSClient", "ListTaskDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTaskDefinitionsCommand)
  .de(de_ListTaskDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTaskDefinitionsRequest;
      output: ListTaskDefinitionsResponse;
    };
    sdk: {
      input: ListTaskDefinitionsCommandInput;
      output: ListTaskDefinitionsCommandOutput;
    };
  };
}
