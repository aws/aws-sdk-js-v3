// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSettingDefaultRequest, PutAccountSettingDefaultResponse } from "../models/models_0";
import { de_PutAccountSettingDefaultCommand, se_PutAccountSettingDefaultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingDefaultCommand}.
 */
export interface PutAccountSettingDefaultCommandInput extends PutAccountSettingDefaultRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingDefaultCommand}.
 */
export interface PutAccountSettingDefaultCommandOutput extends PutAccountSettingDefaultResponse, __MetadataBearer {}

/**
 * <p>Modifies an account setting for all users on an account for whom no individual account
 * 			setting has been specified. Account settings are set on a per-Region basis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingDefaultCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingDefaultCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // PutAccountSettingDefaultRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate", // required
 *   value: "STRING_VALUE", // required
 * };
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingDefaultResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod" || "guardDutyActivate",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     type: "user" || "aws_managed",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountSettingDefaultCommandInput - {@link PutAccountSettingDefaultCommandInput}
 * @returns {@link PutAccountSettingDefaultCommandOutput}
 * @see {@link PutAccountSettingDefaultCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingDefaultCommandOutput} for command's `response` shape.
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To modify the default account settings for all IAM users or roles on an account
 * ```javascript
 * // This example modifies the default account setting for the specified resource for all IAM users or roles on an account. These changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   name: "serviceLongArnFormat",
 *   value: "enabled"
 * };
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   setting: {
 *     name: "serviceLongArnFormat",
 *     principalArn: "arn:aws:iam::<aws_account_id>:root",
 *     value: "enabled"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutAccountSettingDefaultCommand extends $Command
  .classBuilder<
    PutAccountSettingDefaultCommandInput,
    PutAccountSettingDefaultCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "PutAccountSettingDefault", {})
  .n("ECSClient", "PutAccountSettingDefaultCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountSettingDefaultCommand)
  .de(de_PutAccountSettingDefaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingDefaultRequest;
      output: PutAccountSettingDefaultResponse;
    };
    sdk: {
      input: PutAccountSettingDefaultCommandInput;
      output: PutAccountSettingDefaultCommandOutput;
    };
  };
}
