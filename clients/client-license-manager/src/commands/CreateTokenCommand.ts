// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import { CreateToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandInput extends CreateTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandOutput extends CreateTokenResponse, __MetadataBearer {}

/**
 * Creates a long-lived token.
 *
 * A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateTokenRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   RoleArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   ExpirationInDays: Number("int"),
 *   TokenProperties: [ // MaxSize3StringList
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateTokenResponse
 * //   TokenId: "STRING_VALUE",
 * //   TokenType: "REFRESH_TOKEN",
 * //   Token: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTokenCommandInput - {@link CreateTokenCommandInput}
 * @returns {@link CreateTokenCommandOutput}
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link RedirectException} (client fault)
 *
 * This is not the correct Region for the resource. Try again.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class CreateTokenCommand extends command<CreateTokenCommandInput, CreateTokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateToken",
  CreateToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTokenRequest;
      output: CreateTokenResponse;
    };
    sdk: {
      input: CreateTokenCommandInput;
      output: CreateTokenCommandOutput;
    };
  };
}
