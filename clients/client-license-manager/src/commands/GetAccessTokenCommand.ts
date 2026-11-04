// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_0";
import { GetAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetAccessTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetAccessTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
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
export class GetAccessTokenCommand extends command<GetAccessTokenCommandInput, GetAccessTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessToken",
  GetAccessToken$
) {
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
