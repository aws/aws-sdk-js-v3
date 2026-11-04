// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrustedTokenIssuerRequest, DescribeTrustedTokenIssuerResponse } from "../models/models_0";
import { DescribeTrustedTokenIssuer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeTrustedTokenIssuerCommand extends command<DescribeTrustedTokenIssuerCommandInput, DescribeTrustedTokenIssuerCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustedTokenIssuer",
  DescribeTrustedTokenIssuer$
) {
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
