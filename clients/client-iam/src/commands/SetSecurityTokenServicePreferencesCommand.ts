// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetSecurityTokenServicePreferencesRequest } from "../models/models_0";
import { SetSecurityTokenServicePreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.
 *
 * By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at `https://sts.amazonaws.com`. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see [Security Token Service endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sts.html) in the *Amazon Web Services General Reference*.
 *
 * If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see [Activating and deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the *IAM User Guide*.
 *
 * To view the current session token version, see the `GlobalEndpointTokenVersion` entry in the response of the [GetAccountSummary](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html) operation.
 *
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
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class SetSecurityTokenServicePreferencesCommand extends command<SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput>(
  _ep0,
  _mw0,
  "SetSecurityTokenServicePreferences",
  SetSecurityTokenServicePreferences$
) {
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
