// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccountSettingRequest, DeleteAccountSettingResponse } from "../models/models_0";
import { DeleteAccountSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountSettingCommand}.
 */
export interface DeleteAccountSettingCommandInput extends DeleteAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountSettingCommand}.
 */
export interface DeleteAccountSettingCommandOutput extends DeleteAccountSettingResponse, __MetadataBearer {}

/**
 * <p>Disables an account setting for a specified user, role, or the root user for an
 * 			account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteAccountSettingRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate" || "defaultLogDriverMode" || "fargateEventWindows", // required
 *   principalArn: "STRING_VALUE",
 * };
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountSettingResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate" || "defaultLogDriverMode" || "fargateEventWindows",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     type: "user" || "aws_managed",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAccountSettingCommandInput - {@link DeleteAccountSettingCommandInput}
 * @returns {@link DeleteAccountSettingCommandOutput}
 * @see {@link DeleteAccountSettingCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountSettingCommandOutput} for command's `response` shape.
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To delete the account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example deletes the account setting for a specific IAM user or IAM role for the specified resource type. Only the root user can view or modify the account settings for another user.
 * const input = {
 *   name: "containerInstanceLongArnFormat",
 *   principalArn: "arn:aws:iam::<aws_account_id>:user/principalName"
 * };
 * const command = new DeleteAccountSettingCommand(input);
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
 * @example To delete your account setting
 * ```javascript
 * // This example deletes the account setting for your user for the specified resource type.
 * const input = {
 *   name: "serviceLongArnFormat"
 * };
 * const command = new DeleteAccountSettingCommand(input);
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
export class DeleteAccountSettingCommand extends $Command
  .classBuilder<
    DeleteAccountSettingCommandInput,
    DeleteAccountSettingCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DeleteAccountSetting", {})
  .n("ECSClient", "DeleteAccountSettingCommand")
  .sc(DeleteAccountSetting$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountSettingRequest;
      output: DeleteAccountSettingResponse;
    };
    sdk: {
      input: DeleteAccountSettingCommandInput;
      output: DeleteAccountSettingCommandOutput;
    };
  };
}
