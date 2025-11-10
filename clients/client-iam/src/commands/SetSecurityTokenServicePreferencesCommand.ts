// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SetSecurityTokenServicePreferencesRequest } from "../models/models_1";
import {
  de_SetSecurityTokenServicePreferencesCommand,
  se_SetSecurityTokenServicePreferencesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetSecurityTokenServicePreferencesCommand}.
 */
export interface SetSecurityTokenServicePreferencesCommandInput extends SetSecurityTokenServicePreferencesRequest {}
/**
 * @public
 *
 * The output of {@link SetSecurityTokenServicePreferencesCommand}.
 */
export interface SetSecurityTokenServicePreferencesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the specified version of the global endpoint token as the token version used for
 *             the Amazon Web Services account.</p>
 *          <p>By default, Security Token Service (STS) is available as a global service, and all STS requests
 *             go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends
 *             using Regional STS endpoints to reduce latency, build in redundancy, and increase
 *             session token availability. For information about Regional endpoints for STS, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service
 *                 endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>If you make an STS call to the global endpoint, the resulting session tokens might
 *             be valid in some Regions but not others. It depends on the version that is set in this
 *             operation. Version 1 tokens are valid only in Amazon Web Services Regions that are
 *             available by default. These tokens do not work in manually enabled Regions, such as Asia
 *             Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2
 *             tokens are longer and might affect systems where you temporarily store tokens. For
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 deactivating STS in an Amazon Web Services Region</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>To view the current session token version, see the
 *                 <code>GlobalEndpointTokenVersion</code> entry in the response of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html">GetAccountSummary</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetSecurityTokenServicePreferencesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetSecurityTokenServicePreferencesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // SetSecurityTokenServicePreferencesRequest
 *   GlobalEndpointTokenVersion: "v1Token" || "v2Token", // required
 * };
 * const command = new SetSecurityTokenServicePreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetSecurityTokenServicePreferencesCommandInput - {@link SetSecurityTokenServicePreferencesCommandInput}
 * @returns {@link SetSecurityTokenServicePreferencesCommandOutput}
 * @see {@link SetSecurityTokenServicePreferencesCommandInput} for command's `input` shape.
 * @see {@link SetSecurityTokenServicePreferencesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To delete an access key for an IAM user
 * ```javascript
 * // The following command sets the STS global endpoint token to version 2. Version 2 tokens are valid in all Regions.
 * const input = {
 *   GlobalEndpointTokenVersion: "v2Token"
 * };
 * const command = new SetSecurityTokenServicePreferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetSecurityTokenServicePreferencesCommand extends $Command
  .classBuilder<
    SetSecurityTokenServicePreferencesCommandInput,
    SetSecurityTokenServicePreferencesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "SetSecurityTokenServicePreferences", {})
  .n("IAMClient", "SetSecurityTokenServicePreferencesCommand")
  .f(void 0, void 0)
  .ser(se_SetSecurityTokenServicePreferencesCommand)
  .de(de_SetSecurityTokenServicePreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetSecurityTokenServicePreferencesRequest;
      output: {};
    };
    sdk: {
      input: SetSecurityTokenServicePreferencesCommandInput;
      output: SetSecurityTokenServicePreferencesCommandOutput;
    };
  };
}
