// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAuthenticationProfileMessage, ModifyAuthenticationProfileResult } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyAuthenticationProfile } from "../schemas/schemas_45_Authentication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyAuthenticationProfileCommand}.
 */
export interface ModifyAuthenticationProfileCommandInput extends ModifyAuthenticationProfileMessage {}
/**
 * @public
 *
 * The output of {@link ModifyAuthenticationProfileCommand}.
 */
export interface ModifyAuthenticationProfileCommandOutput extends ModifyAuthenticationProfileResult, __MetadataBearer {}

/**
 * <p>Modifies an authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyAuthenticationProfileMessage
 *   AuthenticationProfileName: "STRING_VALUE", // required
 *   AuthenticationProfileContent: "STRING_VALUE", // required
 * };
 * const command = new ModifyAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAuthenticationProfileResult
 * //   AuthenticationProfileName: "STRING_VALUE",
 * //   AuthenticationProfileContent: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyAuthenticationProfileCommandInput - {@link ModifyAuthenticationProfileCommandInput}
 * @returns {@link ModifyAuthenticationProfileCommandOutput}
 * @see {@link ModifyAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link ModifyAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileNotFoundFault} (client fault)
 *  <p>The authentication profile can't be found.</p>
 *
 * @throws {@link AuthenticationProfileQuotaExceededFault} (client fault)
 *  <p>The size or number of authentication profiles has exceeded the quota.
 *             The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.</p>
 *
 * @throws {@link InvalidAuthenticationProfileRequestFault} (client fault)
 *  <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyAuthenticationProfileCommand extends $Command
  .classBuilder<
    ModifyAuthenticationProfileCommandInput,
    ModifyAuthenticationProfileCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyAuthenticationProfile", {})
  .n("RedshiftClient", "ModifyAuthenticationProfileCommand")
  .sc(ModifyAuthenticationProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAuthenticationProfileMessage;
      output: ModifyAuthenticationProfileResult;
    };
    sdk: {
      input: ModifyAuthenticationProfileCommandInput;
      output: ModifyAuthenticationProfileCommandOutput;
    };
  };
}
