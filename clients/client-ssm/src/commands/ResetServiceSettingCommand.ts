// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResetServiceSettingRequest, ResetServiceSettingResult } from "../models/models_2";
import { de_ResetServiceSettingCommand, se_ResetServiceSettingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetServiceSettingCommand}.
 */
export interface ResetServiceSettingCommandInput extends ResetServiceSettingRequest {}
/**
 * @public
 *
 * The output of {@link ResetServiceSettingCommand}.
 */
export interface ResetServiceSettingCommandOutput extends ResetServiceSettingResult, __MetadataBearer {}

/**
 * <p>
 *             <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 *    service team might create a default setting of "false". This means the user can't use this
 *    feature unless they change the setting to "true" and intentionally opt in for a paid
 *    feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the
 *    current value. Use the <a>UpdateServiceSetting</a> API operation to change the default
 *    setting. </p>
 *          <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services
 *    service team. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResetServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResetServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ResetServiceSettingRequest
 *   SettingId: "STRING_VALUE", // required
 * };
 * const command = new ResetServiceSettingCommand(input);
 * const response = await client.send(command);
 * // { // ResetServiceSettingResult
 * //   ServiceSetting: { // ServiceSetting
 * //     SettingId: "STRING_VALUE",
 * //     SettingValue: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     LastModifiedUser: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetServiceSettingCommandInput - {@link ResetServiceSettingCommandInput}
 * @returns {@link ResetServiceSettingCommandOutput}
 * @see {@link ResetServiceSettingCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ServiceSettingNotFound} (client fault)
 *  <p>The specified service setting wasn't found. Either the service name or the setting hasn't
 *    been provisioned by the Amazon Web Services service team.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ResetServiceSettingCommand extends $Command
  .classBuilder<
    ResetServiceSettingCommandInput,
    ResetServiceSettingCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ResetServiceSetting", {})
  .n("SSMClient", "ResetServiceSettingCommand")
  .f(void 0, void 0)
  .ser(se_ResetServiceSettingCommand)
  .de(de_ResetServiceSettingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetServiceSettingRequest;
      output: ResetServiceSettingResult;
    };
    sdk: {
      input: ResetServiceSettingCommandInput;
      output: ResetServiceSettingCommandOutput;
    };
  };
}
