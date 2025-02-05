// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAuthenticationProfileMessage, ModifyAuthenticationProfileResult } from "../models/models_1";
import { de_ModifyAuthenticationProfileCommand, se_ModifyAuthenticationProfileCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "ModifyAuthenticationProfile", {})
  .n("RedshiftClient", "ModifyAuthenticationProfileCommand")
  .f(void 0, void 0)
  .ser(se_ModifyAuthenticationProfileCommand)
  .de(de_ModifyAuthenticationProfileCommand)
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
