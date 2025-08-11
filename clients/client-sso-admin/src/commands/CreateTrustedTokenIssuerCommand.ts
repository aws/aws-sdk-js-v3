// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrustedTokenIssuerRequest, CreateTrustedTokenIssuerResponse } from "../models/models_0";
import { de_CreateTrustedTokenIssuerCommand, se_CreateTrustedTokenIssuerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustedTokenIssuerCommand}.
 */
export interface CreateTrustedTokenIssuerCommandInput extends CreateTrustedTokenIssuerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustedTokenIssuerCommand}.
 */
export interface CreateTrustedTokenIssuerCommandOutput extends CreateTrustedTokenIssuerResponse, __MetadataBearer {}

/**
 * <p>Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services.</p> <p>This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateTrustedTokenIssuerCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateTrustedTokenIssuerCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // CreateTrustedTokenIssuerRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TrustedTokenIssuerType: "OIDC_JWT", // required
 *   TrustedTokenIssuerConfiguration: { // TrustedTokenIssuerConfiguration Union: only one key present
 *     OidcJwtConfiguration: { // OidcJwtConfiguration
 *       IssuerUrl: "STRING_VALUE", // required
 *       ClaimAttributePath: "STRING_VALUE", // required
 *       IdentityStoreAttributePath: "STRING_VALUE", // required
 *       JwksRetrievalOption: "OPEN_ID_DISCOVERY", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTrustedTokenIssuerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustedTokenIssuerResponse
 * //   TrustedTokenIssuerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrustedTokenIssuerCommandInput - {@link CreateTrustedTokenIssuerCommandInput}
 * @returns {@link CreateTrustedTokenIssuerCommandOutput}
 * @see {@link CreateTrustedTokenIssuerCommandInput} for command's `input` shape.
 * @see {@link CreateTrustedTokenIssuerCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
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
export class CreateTrustedTokenIssuerCommand extends $Command
  .classBuilder<
    CreateTrustedTokenIssuerCommandInput,
    CreateTrustedTokenIssuerCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "CreateTrustedTokenIssuer", {})
  .n("SSOAdminClient", "CreateTrustedTokenIssuerCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrustedTokenIssuerCommand)
  .de(de_CreateTrustedTokenIssuerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustedTokenIssuerRequest;
      output: CreateTrustedTokenIssuerResponse;
    };
    sdk: {
      input: CreateTrustedTokenIssuerCommandInput;
      output: CreateTrustedTokenIssuerCommandOutput;
    };
  };
}
