// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/models_0";
import { PutAccountSetting } from "../schemas/schemas_6_Account";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandInput extends PutAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandOutput extends PutAccountSettingResponse, __MetadataBearer {}

/**
 * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p>
 *          <p>If you change the root user account setting, the default settings are reset for users and
 * 			roles that do not have specified individual account settings. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account
 * 				Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // PutAccountSettingRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate" || "defaultLogDriverMode", // required
 *   value: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE",
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate" || "defaultLogDriverMode",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     type: "user" || "aws_managed",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountSettingCommandInput - {@link PutAccountSettingCommandInput}
 * @returns {@link PutAccountSettingCommandOutput}
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To modify the account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example modifies the account setting for a specific IAM user or IAM role to opt in to the new ARN and resource ID format for Amazon ECS container instances. If you’re using this command as the root user, then changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   name: "containerInstanceLongArnFormat",
 *   principalArn: "arn:aws:iam::<aws_account_id>:user/principalName",
 *   value: "enabled"
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   setting: {
 *     name: "containerInstanceLongArnFormat",
 *     principalArn: "arn:aws:iam::<aws_account_id>:user/principalName",
 *     value: "enabled"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To modify your account settings
 * ```javascript
 * // This example modifies your account settings to opt in to the new ARN and resource ID format for Amazon ECS services. If you’re using this command as the root user, then changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   name: "serviceLongArnFormat",
 *   value: "enabled"
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   setting: {
 *     name: "serviceLongArnFormat",
 *     principalArn: "arn:aws:iam::<aws_account_id>:user/principalName",
 *     value: "enabled"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutAccountSettingCommand extends $Command
  .classBuilder<
    PutAccountSettingCommandInput,
    PutAccountSettingCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "PutAccountSetting", {})
  .n("ECSClient", "PutAccountSettingCommand")
  .sc(PutAccountSetting)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingRequest;
      output: PutAccountSettingResponse;
    };
    sdk: {
      input: PutAccountSettingCommandInput;
      output: PutAccountSettingCommandOutput;
    };
  };
}
