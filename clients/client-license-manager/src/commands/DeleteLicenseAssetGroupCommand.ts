// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type { DeleteLicenseAssetGroupRequest, DeleteLicenseAssetGroupResponse } from "../models/models_0";
import { DeleteLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a license asset group.</p>
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
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class DeleteLicenseAssetGroupCommand extends $Command
  .classBuilder<
    DeleteLicenseAssetGroupCommandInput,
    DeleteLicenseAssetGroupCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "DeleteLicenseAssetGroup", {})
  .n("LicenseManagerClient", "DeleteLicenseAssetGroupCommand")
  .sc(DeleteLicenseAssetGroup$)
  .build() {
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
