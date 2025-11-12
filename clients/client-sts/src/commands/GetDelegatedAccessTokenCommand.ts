// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDelegatedAccessTokenRequest, GetDelegatedAccessTokenResponse } from "../models/models_0";
import { GetDelegatedAccessToken } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDelegatedAccessTokenCommand}.
 */
export interface GetDelegatedAccessTokenCommandInput extends GetDelegatedAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetDelegatedAccessTokenCommand}.
 */
export interface GetDelegatedAccessTokenCommandOutput extends GetDelegatedAccessTokenResponse, __MetadataBearer {}

/**
 * <p>This API is currently unavailable for general use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetDelegatedAccessTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetDelegatedAccessTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // GetDelegatedAccessTokenRequest
 *   TradeInToken: "STRING_VALUE", // required
 * };
 * const command = new GetDelegatedAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetDelegatedAccessTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   PackedPolicySize: Number("int"),
 * //   AssumedPrincipal: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDelegatedAccessTokenCommandInput - {@link GetDelegatedAccessTokenCommandInput}
 * @returns {@link GetDelegatedAccessTokenCommandOutput}
 * @see {@link GetDelegatedAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetDelegatedAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTradeInTokenException} (client fault)
 *  <p></p>
 *
 * @throws {@link RegionDisabledException} (client fault)
 *  <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate
 *             STS in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate">Activating and
 *                 Deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User
 *                 Guide</i>.</p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 *
 * @public
 */
export class GetDelegatedAccessTokenCommand extends $Command
  .classBuilder<
    GetDelegatedAccessTokenCommandInput,
    GetDelegatedAccessTokenCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: STSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {})
  .n("STSClient", "GetDelegatedAccessTokenCommand")
  .sc(GetDelegatedAccessToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDelegatedAccessTokenRequest;
      output: GetDelegatedAccessTokenResponse;
    };
    sdk: {
      input: GetDelegatedAccessTokenCommandInput;
      output: GetDelegatedAccessTokenCommandOutput;
    };
  };
}
