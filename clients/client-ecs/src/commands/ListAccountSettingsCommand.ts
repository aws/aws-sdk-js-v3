// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountSettingsRequest, ListAccountSettingsResponse } from "../models/models_0";
import { de_ListAccountSettingsCommand, se_ListAccountSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountSettingsCommand}.
 */
export interface ListAccountSettingsCommandInput extends ListAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountSettingsCommand}.
 */
export interface ListAccountSettingsCommandOutput extends ListAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Lists the account settings for a specified principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAccountSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAccountSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListAccountSettingsRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate",
 *   value: "STRING_VALUE",
 *   principalArn: "STRING_VALUE",
 *   effectiveSettings: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountSettingsResponse
 * //   settings: [ // Settings
 * //     { // Setting
 * //       name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate",
 * //       value: "STRING_VALUE",
 * //       principalArn: "STRING_VALUE",
 * //       type: "user" || "aws_managed",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountSettingsCommandInput - {@link ListAccountSettingsCommandInput}
 * @returns {@link ListAccountSettingsCommandOutput}
 * @see {@link ListAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link ListAccountSettingsCommandOutput} for command's `response` shape.
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
 * @example To view your effective account settings
 * ```javascript
 * // This example displays the effective account settings for your account.
 * const input = {
 *   "effectiveSettings": true
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "settings": [
 *     {
 *       "name": "containerInstanceLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "serviceLongArnFormat",
 *       "value": "enabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "taskLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-your-account-settings-1549524118170
 * ```
 *
 * @example To view the effective account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example displays the effective account settings for the specified user or role.
 * const input = {
 *   "effectiveSettings": true,
 *   "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "settings": [
 *     {
 *       "name": "containerInstanceLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "serviceLongArnFormat",
 *       "value": "enabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "taskLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-the-account-settings-for-a-specific-iam-user-or-iam-role-1549524237932
 * ```
 *
 */
export class ListAccountSettingsCommand extends $Command
  .classBuilder<
    ListAccountSettingsCommandInput,
    ListAccountSettingsCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "ListAccountSettings", {})
  .n("ECSClient", "ListAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountSettingsCommand)
  .de(de_ListAccountSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountSettingsRequest;
      output: ListAccountSettingsResponse;
    };
    sdk: {
      input: ListAccountSettingsCommandInput;
      output: ListAccountSettingsCommandOutput;
    };
  };
}
