// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLicenseAssetRulesetRequest, DeleteLicenseAssetRulesetResponse } from "../models/models_0";
import { DeleteLicenseAssetRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseAssetRulesetCommand}.
 */
export interface DeleteLicenseAssetRulesetCommandInput extends DeleteLicenseAssetRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseAssetRulesetCommand}.
 */
export interface DeleteLicenseAssetRulesetCommandOutput extends DeleteLicenseAssetRulesetResponse, __MetadataBearer {}

/**
 * Deletes a license asset ruleset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseAssetRulesetCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseAssetRulesetCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseAssetRulesetRequest
 *   LicenseAssetRulesetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseAssetRulesetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLicenseAssetRulesetCommandInput - {@link DeleteLicenseAssetRulesetCommandInput}
 * @returns {@link DeleteLicenseAssetRulesetCommandOutput}
 * @see {@link DeleteLicenseAssetRulesetCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseAssetRulesetCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
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
export class DeleteLicenseAssetRulesetCommand extends command<DeleteLicenseAssetRulesetCommandInput, DeleteLicenseAssetRulesetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicenseAssetRuleset",
  DeleteLicenseAssetRuleset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseAssetRulesetRequest;
      output: {};
    };
    sdk: {
      input: DeleteLicenseAssetRulesetCommandInput;
      output: DeleteLicenseAssetRulesetCommandOutput;
    };
  };
}
