// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBearerTokenRequest, CreateBearerTokenResponse } from "../models/models_0";
import { CreateBearerToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBearerTokenCommand}.
 */
export interface CreateBearerTokenCommandInput extends CreateBearerTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateBearerTokenCommand}.
 */
export interface CreateBearerTokenCommandOutput extends CreateBearerTokenResponse, __MetadataBearer {}

/**
 * Creates a bearer token that represents your IAM credentials and can be used to access a supported AWS service. By default, the token is valid for 12 hours.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, CreateBearerTokenCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, CreateBearerTokenCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // CreateBearerTokenRequest
 *   grantType: "STRING_VALUE", // required
 *   resource: "STRING_VALUE", // required
 *   durationSeconds: Number("int"),
 * };
 * const command = new CreateBearerTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateBearerTokenResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   tokenType: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateBearerTokenCommandInput - {@link CreateBearerTokenCommandInput}
 * @returns {@link CreateBearerTokenCommandOutput}
 * @see {@link CreateBearerTokenCommandInput} for command's `input` shape.
 * @see {@link CreateBearerTokenCommandOutput} for command's `response` shape.
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
export class CreateBearerTokenCommand extends command<CreateBearerTokenCommandInput, CreateBearerTokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateBearerToken",
  CreateBearerToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBearerTokenRequest;
      output: CreateBearerTokenResponse;
    };
    sdk: {
      input: CreateBearerTokenCommandInput;
      output: CreateBearerTokenCommandOutput;
    };
  };
}
