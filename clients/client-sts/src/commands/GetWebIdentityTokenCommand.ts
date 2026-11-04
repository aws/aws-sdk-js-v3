// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWebIdentityTokenRequest, GetWebIdentityTokenResponse } from "../models/models_0";
import { GetWebIdentityToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWebIdentityTokenCommand}.
 */
export interface GetWebIdentityTokenCommandInput extends GetWebIdentityTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetWebIdentityTokenCommand}.
 */
export interface GetWebIdentityTokenCommandOutput extends GetWebIdentityTokenResponse, __MetadataBearer {}

/**
 * Returns a signed JSON Web Token (JWT) that represents the calling Amazon Web Services identity. The returned JWT can be used to authenticate with external services that support OIDC discovery. The token is signed by Amazon Web Services STS and can be publicly verified using the verification keys published at the issuer's JWKS endpoint.
 *
 * > **Note:** The `GetWebIdentityToken` API is not available on the STS Global endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetWebIdentityTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetWebIdentityTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // GetWebIdentityTokenRequest
 *   Audience: [ // webIdentityTokenAudienceListType // required
 *     "STRING_VALUE",
 *   ],
 *   DurationSeconds: Number("int"),
 *   SigningAlgorithm: "STRING_VALUE", // required
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new GetWebIdentityTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetWebIdentityTokenResponse
 * //   WebIdentityToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetWebIdentityTokenCommandInput - {@link GetWebIdentityTokenCommandInput}
 * @returns {@link GetWebIdentityTokenCommandOutput}
 * @see {@link GetWebIdentityTokenCommandInput} for command's `input` shape.
 * @see {@link GetWebIdentityTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link JWTPayloadSizeExceededException} (client fault)
 *
 * The requested token payload size exceeds the maximum allowed size. Reduce the number of request tags included in the `GetWebIdentityToken` API call to reduce the token payload size.
 *
 * @throws {@link OutboundWebIdentityFederationDisabledException} (client fault)
 *
 * The outbound web identity federation feature is not enabled for this account. To use this feature, you must first enable it through the Amazon Web Services Management Console or API.
 *
 * @throws {@link SessionDurationEscalationException} (client fault)
 *
 * The requested token duration would extend the session beyond its original expiration time. You cannot use this operation to extend the lifetime of a session beyond what was granted when the session was originally created.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @public
 */
export class GetWebIdentityTokenCommand extends command<GetWebIdentityTokenCommandInput, GetWebIdentityTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetWebIdentityToken",
  GetWebIdentityToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebIdentityTokenRequest;
      output: GetWebIdentityTokenResponse;
    };
    sdk: {
      input: GetWebIdentityTokenCommandInput;
      output: GetWebIdentityTokenCommandOutput;
    };
  };
}
