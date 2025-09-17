// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAuthenticationProfileMessage, CreateAuthenticationProfileResult } from "../models/models_0";
import { de_CreateAuthenticationProfileCommand, se_CreateAuthenticationProfileCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAuthenticationProfileCommand}.
 */
export interface CreateAuthenticationProfileCommandInput extends CreateAuthenticationProfileMessage {}
/**
 * @public
 *
 * The output of {@link CreateAuthenticationProfileCommand}.
 */
export interface CreateAuthenticationProfileCommandOutput extends CreateAuthenticationProfileResult, __MetadataBearer {}

/**
 * <p>Creates an authentication profile with the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateAuthenticationProfileMessage
 *   AuthenticationProfileName: "STRING_VALUE", // required
 *   AuthenticationProfileContent: "STRING_VALUE", // required
 * };
 * const command = new CreateAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthenticationProfileResult
 * //   AuthenticationProfileName: "STRING_VALUE",
 * //   AuthenticationProfileContent: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthenticationProfileCommandInput - {@link CreateAuthenticationProfileCommandInput}
 * @returns {@link CreateAuthenticationProfileCommandOutput}
 * @see {@link CreateAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileAlreadyExistsFault} (client fault)
 *  <p>The authentication profile already exists.</p>
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
export class CreateAuthenticationProfileCommand extends $Command
  .classBuilder<
    CreateAuthenticationProfileCommandInput,
    CreateAuthenticationProfileCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "CreateAuthenticationProfile", {})
  .n("RedshiftClient", "CreateAuthenticationProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateAuthenticationProfileCommand)
  .de(de_CreateAuthenticationProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthenticationProfileMessage;
      output: CreateAuthenticationProfileResult;
    };
    sdk: {
      input: CreateAuthenticationProfileCommandInput;
      output: CreateAuthenticationProfileCommandOutput;
    };
  };
}
