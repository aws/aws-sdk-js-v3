// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseConfigurationRequest, UpdateLicenseConfigurationResponse } from "../models/models_0";
import { UpdateLicenseConfiguration } from "../schemas/schemas_16_License";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseConfigurationCommand}.
 */
export interface UpdateLicenseConfigurationCommandInput extends UpdateLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseConfigurationCommand}.
 */
export interface UpdateLicenseConfigurationCommandOutput extends UpdateLicenseConfigurationResponse, __MetadataBearer {}

/**
 * <p>Modifies the attributes of an existing license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 *   LicenseConfigurationStatus: "AVAILABLE" || "DISABLED",
 *   LicenseRules: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   LicenseCount: Number("long"),
 *   LicenseCountHardLimit: true || false,
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ProductInformationList: [ // ProductInformationList
 *     { // ProductInformation
 *       ResourceType: "STRING_VALUE", // required
 *       ProductInformationFilterList: [ // ProductInformationFilterList // required
 *         { // ProductInformationFilter
 *           ProductInformationFilterName: "STRING_VALUE", // required
 *           ProductInformationFilterValue: [
 *             "STRING_VALUE",
 *           ],
 *           ProductInformationFilterComparator: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   DisassociateWhenNotFound: true || false,
 * };
 * const command = new UpdateLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseConfigurationCommandInput - {@link UpdateLicenseConfigurationCommandInput}
 * @returns {@link UpdateLicenseConfigurationCommandOutput}
 * @see {@link UpdateLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class UpdateLicenseConfigurationCommand extends $Command
  .classBuilder<
    UpdateLicenseConfigurationCommandInput,
    UpdateLicenseConfigurationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "UpdateLicenseConfiguration", {})
  .n("LicenseManagerClient", "UpdateLicenseConfigurationCommand")
  .sc(UpdateLicenseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateLicenseConfigurationCommandInput;
      output: UpdateLicenseConfigurationCommandOutput;
    };
  };
}
