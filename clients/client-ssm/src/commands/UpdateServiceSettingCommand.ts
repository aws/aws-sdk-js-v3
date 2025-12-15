// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceSettingRequest, UpdateServiceSettingResult } from "../models/models_1";
import { UpdateServiceSetting$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSettingCommand}.
 */
export interface UpdateServiceSettingCommandInput extends UpdateServiceSettingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSettingCommand}.
 */
export interface UpdateServiceSettingCommandOutput extends UpdateServiceSettingResult, __MetadataBearer {}

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
 *    current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the
 *    original value defined by the Amazon Web Services service team.</p>
 *          <p>Update the service setting for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateServiceSettingRequest
 *   SettingId: "STRING_VALUE", // required
 *   SettingValue: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceSettingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServiceSettingCommandInput - {@link UpdateServiceSettingCommandInput}
 * @returns {@link UpdateServiceSettingCommandOutput}
 * @see {@link UpdateServiceSettingCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingCommandOutput} for command's `response` shape.
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
export class UpdateServiceSettingCommand extends $Command
  .classBuilder<
    UpdateServiceSettingCommandInput,
    UpdateServiceSettingCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateServiceSetting", {})
  .n("SSMClient", "UpdateServiceSettingCommand")
  .sc(UpdateServiceSetting$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceSettingRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceSettingCommandInput;
      output: UpdateServiceSettingCommandOutput;
    };
  };
}
