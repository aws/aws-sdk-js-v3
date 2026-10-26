// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateOAuth2TokenWithIAMRequest, CreateOAuth2TokenWithIAMResponse } from "../models/models_0";
import { CreateOAuth2TokenWithIAM$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOAuth2TokenWithIAMCommand}.
 */
export interface CreateOAuth2TokenWithIAMCommandInput extends CreateOAuth2TokenWithIAMRequest {}
/**
 * @public
 *
 * The output of {@link CreateOAuth2TokenWithIAMCommand}.
 */
export interface CreateOAuth2TokenWithIAMCommandOutput extends CreateOAuth2TokenWithIAMResponse, __MetadataBearer {}

/**
 * Exchanges client credentials for an OAuth 2.0 access token scoped to a resource, which you can use to access AWS services from applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, CreateOAuth2TokenWithIAMCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, CreateOAuth2TokenWithIAMCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // CreateOAuth2TokenWithIAMRequest
 *   grantType: "STRING_VALUE", // required
 *   resource: "STRING_VALUE", // required
 * };
 * const command = new CreateOAuth2TokenWithIAMCommand(input);
 * const response = await client.send(command);
 * // { // CreateOAuth2TokenWithIAMResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   tokenType: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateOAuth2TokenWithIAMCommandInput - {@link CreateOAuth2TokenWithIAMCommandInput}
 * @returns {@link CreateOAuth2TokenWithIAMCommandOutput}
 * @see {@link CreateOAuth2TokenWithIAMCommandInput} for command's `input` shape.
 * @see {@link CreateOAuth2TokenWithIAMCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
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
export class CreateOAuth2TokenWithIAMCommand extends command<CreateOAuth2TokenWithIAMCommandInput, CreateOAuth2TokenWithIAMCommandOutput>(
  _ep1,
  _mw0,
  "CreateOAuth2TokenWithIAM",
  CreateOAuth2TokenWithIAM$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOAuth2TokenWithIAMRequest;
      output: CreateOAuth2TokenWithIAMResponse;
    };
    sdk: {
      input: CreateOAuth2TokenWithIAMCommandInput;
      output: CreateOAuth2TokenWithIAMCommandOutput;
    };
  };
}
