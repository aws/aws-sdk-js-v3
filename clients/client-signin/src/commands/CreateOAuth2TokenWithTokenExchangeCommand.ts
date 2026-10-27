// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  CreateOAuth2TokenWithTokenExchangeRequest,
  CreateOAuth2TokenWithTokenExchangeResponse,
} from "../models/models_0";
import { CreateOAuth2TokenWithTokenExchange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOAuth2TokenWithTokenExchangeCommand}.
 */
export interface CreateOAuth2TokenWithTokenExchangeCommandInput extends CreateOAuth2TokenWithTokenExchangeRequest {}
/**
 * @public
 *
 * The output of {@link CreateOAuth2TokenWithTokenExchangeCommand}.
 */
export interface CreateOAuth2TokenWithTokenExchangeCommandOutput extends CreateOAuth2TokenWithTokenExchangeResponse, __MetadataBearer {}

/**
 * Exchanges a supported token for an OAuth 2.0 access token scoped to a resource, which you can use to access AWS services from applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, CreateOAuth2TokenWithTokenExchangeCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, CreateOAuth2TokenWithTokenExchangeCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // CreateOAuth2TokenWithTokenExchangeRequest
 *   grantType: "STRING_VALUE", // required
 *   subjectToken: "STRING_VALUE",
 *   subjectTokenType: "STRING_VALUE",
 *   resource: "STRING_VALUE",
 *   scope: "STRING_VALUE",
 * };
 * const command = new CreateOAuth2TokenWithTokenExchangeCommand(input);
 * const response = await client.send(command);
 * // { // CreateOAuth2TokenWithTokenExchangeResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   issuedTokenType: "STRING_VALUE",
 * //   tokenType: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateOAuth2TokenWithTokenExchangeCommandInput - {@link CreateOAuth2TokenWithTokenExchangeCommandInput}
 * @returns {@link CreateOAuth2TokenWithTokenExchangeCommandOutput}
 * @see {@link CreateOAuth2TokenWithTokenExchangeCommandInput} for command's `input` shape.
 * @see {@link CreateOAuth2TokenWithTokenExchangeCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link InvalidGrantException} (client fault)
 *  The request failed because the provided grant is invalid or expired.
 *
 * @throws {@link InvalidScopeException} (client fault)
 *  The request failed because the requested scope is invalid or exceeds the scope that can be granted.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  The request failed because a dependency is temporarily unavailable. You can retry the request.
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class CreateOAuth2TokenWithTokenExchangeCommand extends command<CreateOAuth2TokenWithTokenExchangeCommandInput, CreateOAuth2TokenWithTokenExchangeCommandOutput>(
  _ep1,
  _mw0,
  "CreateOAuth2TokenWithTokenExchange",
  CreateOAuth2TokenWithTokenExchange$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOAuth2TokenWithTokenExchangeRequest;
      output: CreateOAuth2TokenWithTokenExchangeResponse;
    };
    sdk: {
      input: CreateOAuth2TokenWithTokenExchangeCommandInput;
      output: CreateOAuth2TokenWithTokenExchangeCommandOutput;
    };
  };
}
