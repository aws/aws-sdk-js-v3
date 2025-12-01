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
import type { UpdateLicenseAssetGroupRequest, UpdateLicenseAssetGroupResponse } from "../models/models_0";
import { UpdateLicenseAssetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseAssetGroupCommand}.
 */
export interface UpdateLicenseAssetGroupCommandInput extends UpdateLicenseAssetGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseAssetGroupCommand}.
 */
export interface UpdateLicenseAssetGroupCommandOutput extends UpdateLicenseAssetGroupResponse, __MetadataBearer {}

/**
 * <p>Updates a license asset group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseAssetGroupCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseAssetGroupCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseAssetGroupRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LicenseAssetGroupConfigurations: [ // LicenseAssetGroupConfigurationList
 *     { // LicenseAssetGroupConfiguration
 *       UsageDimension: "STRING_VALUE",
 *     },
 *   ],
 *   AssociatedLicenseAssetRulesetARNs: [ // LicenseAssetRulesetArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Properties: [ // LicenseAssetGroupPropertyList
 *     { // LicenseAssetGroupProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   LicenseAssetGroupArn: "STRING_VALUE", // required
 *   Status: "ACTIVE" || "DISABLED" || "DELETED",
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateLicenseAssetGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLicenseAssetGroupResponse
 * //   LicenseAssetGroupArn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateLicenseAssetGroupCommandInput - {@link UpdateLicenseAssetGroupCommandInput}
 * @returns {@link UpdateLicenseAssetGroupCommandOutput}
 * @see {@link UpdateLicenseAssetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseAssetGroupCommandOutput} for command's `response` shape.
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
export class UpdateLicenseAssetGroupCommand extends $Command
  .classBuilder<
    UpdateLicenseAssetGroupCommandInput,
    UpdateLicenseAssetGroupCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "UpdateLicenseAssetGroup", {})
  .n("LicenseManagerClient", "UpdateLicenseAssetGroupCommand")
  .sc(UpdateLicenseAssetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseAssetGroupRequest;
      output: UpdateLicenseAssetGroupResponse;
    };
    sdk: {
      input: UpdateLicenseAssetGroupCommandInput;
      output: UpdateLicenseAssetGroupCommandOutput;
    };
  };
}
