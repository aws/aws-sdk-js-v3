// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLicenseRequest, DeleteLicenseResponse } from "../models/models_0";
import { DeleteLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseCommand}.
 */
export interface DeleteLicenseCommandInput extends DeleteLicenseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseCommand}.
 */
export interface DeleteLicenseCommandOutput extends DeleteLicenseResponse, __MetadataBearer {}

/**
 * Deletes the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   SourceVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLicenseResponse
 * //   Status: "PENDING_DELETE" || "DELETED",
 * //   DeletionDate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteLicenseCommandInput - {@link DeleteLicenseCommandInput}
 * @returns {@link DeleteLicenseCommandOutput}
 * @see {@link DeleteLicenseCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link RedirectException} (client fault)
 *
 * This is not the correct Region for the resource. Try again.
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
export class DeleteLicenseCommand extends command<DeleteLicenseCommandInput, DeleteLicenseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicense",
  DeleteLicense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseRequest;
      output: DeleteLicenseResponse;
    };
    sdk: {
      input: DeleteLicenseCommandInput;
      output: DeleteLicenseCommandOutput;
    };
  };
}
