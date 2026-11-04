// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLicenseAssetGroupRequest, DeleteLicenseAssetGroupResponse } from "../models/models_0";
import { DeleteLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseAssetGroupCommand}.
 */
export interface DeleteLicenseAssetGroupCommandInput extends DeleteLicenseAssetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseAssetGroupCommand}.
 */
export interface DeleteLicenseAssetGroupCommandOutput extends DeleteLicenseAssetGroupResponse, __MetadataBearer {}

/**
 * Deletes a license asset group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseAssetGroupCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseAssetGroupCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseAssetGroupRequest
 *   LicenseAssetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseAssetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLicenseAssetGroupResponse
 * //   Status: "ACTIVE" || "DISABLED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteLicenseAssetGroupCommandInput - {@link DeleteLicenseAssetGroupCommandInput}
 * @returns {@link DeleteLicenseAssetGroupCommandOutput}
 * @see {@link DeleteLicenseAssetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseAssetGroupCommandOutput} for command's `response` shape.
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
export class DeleteLicenseAssetGroupCommand extends command<DeleteLicenseAssetGroupCommandInput, DeleteLicenseAssetGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicenseAssetGroup",
  DeleteLicenseAssetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseAssetGroupRequest;
      output: DeleteLicenseAssetGroupResponse;
    };
    sdk: {
      input: DeleteLicenseAssetGroupCommandInput;
      output: DeleteLicenseAssetGroupCommandOutput;
    };
  };
}
