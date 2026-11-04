// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTokenRequest, DeleteTokenResponse } from "../models/models_0";
import { DeleteToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTokenCommand}.
 */
export interface DeleteTokenCommandInput extends DeleteTokenRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTokenCommand}.
 */
export interface DeleteTokenCommandOutput extends DeleteTokenResponse, __MetadataBearer {}

/**
 * Deletes the specified token. Must be called in the license home Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteTokenRequest
 *   TokenId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTokenCommandInput - {@link DeleteTokenCommandInput}
 * @returns {@link DeleteTokenCommandOutput}
 * @see {@link DeleteTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteTokenCommandOutput} for command's `response` shape.
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
export class DeleteTokenCommand extends command<DeleteTokenCommandInput, DeleteTokenCommandOutput>(
  _ep0,
  _mw0,
  "DeleteToken",
  DeleteToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTokenRequest;
      output: {};
    };
    sdk: {
      input: DeleteTokenCommandInput;
      output: DeleteTokenCommandOutput;
    };
  };
}
