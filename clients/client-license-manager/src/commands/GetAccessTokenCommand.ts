// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_0";
import { de_GetAccessTokenCommand, se_GetAccessTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandInput extends GetAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandOutput extends GetAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 *           are valid for one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetAccessTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetAccessTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LicenseManagerClient(config);
 * const input = { // GetAccessTokenRequest
 *   Token: "STRING_VALUE", // required
 *   TokenProperties: [ // MaxSize3StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessTokenResponse
 * //   AccessToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessTokenCommandInput - {@link GetAccessTokenCommandInput}
 * @returns {@link GetAccessTokenCommandOutput}
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 * @public
 */
export class GetAccessTokenCommand extends $Command
  .classBuilder<
    GetAccessTokenCommandInput,
    GetAccessTokenCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "GetAccessToken", {})
  .n("LicenseManagerClient", "GetAccessTokenCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessTokenCommand)
  .de(de_GetAccessTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessTokenRequest;
      output: GetAccessTokenResponse;
    };
    sdk: {
      input: GetAccessTokenCommandInput;
      output: GetAccessTokenCommandOutput;
    };
  };
}
