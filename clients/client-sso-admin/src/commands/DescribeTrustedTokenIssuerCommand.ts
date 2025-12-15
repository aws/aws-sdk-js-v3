// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTrustedTokenIssuerRequest, DescribeTrustedTokenIssuerResponse } from "../models/models_0";
import { DescribeTrustedTokenIssuer$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedTokenIssuerCommand}.
 */
export interface DescribeTrustedTokenIssuerCommandInput extends DescribeTrustedTokenIssuerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedTokenIssuerCommand}.
 */
export interface DescribeTrustedTokenIssuerCommandOutput extends DescribeTrustedTokenIssuerResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeTrustedTokenIssuerCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeTrustedTokenIssuerCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeTrustedTokenIssuerRequest
 *   TrustedTokenIssuerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrustedTokenIssuerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedTokenIssuerResponse
 * //   TrustedTokenIssuerArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   TrustedTokenIssuerType: "OIDC_JWT",
 * //   TrustedTokenIssuerConfiguration: { // TrustedTokenIssuerConfiguration Union: only one key present
 * //     OidcJwtConfiguration: { // OidcJwtConfiguration
 * //       IssuerUrl: "STRING_VALUE", // required
 * //       ClaimAttributePath: "STRING_VALUE", // required
 * //       IdentityStoreAttributePath: "STRING_VALUE", // required
 * //       JwksRetrievalOption: "OPEN_ID_DISCOVERY", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrustedTokenIssuerCommandInput - {@link DescribeTrustedTokenIssuerCommandInput}
 * @returns {@link DescribeTrustedTokenIssuerCommandOutput}
 * @see {@link DescribeTrustedTokenIssuerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedTokenIssuerCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DescribeTrustedTokenIssuerCommand extends $Command
  .classBuilder<
    DescribeTrustedTokenIssuerCommandInput,
    DescribeTrustedTokenIssuerCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribeTrustedTokenIssuer", {})
  .n("SSOAdminClient", "DescribeTrustedTokenIssuerCommand")
  .sc(DescribeTrustedTokenIssuer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustedTokenIssuerRequest;
      output: DescribeTrustedTokenIssuerResponse;
    };
    sdk: {
      input: DescribeTrustedTokenIssuerCommandInput;
      output: DescribeTrustedTokenIssuerCommandOutput;
    };
  };
}
