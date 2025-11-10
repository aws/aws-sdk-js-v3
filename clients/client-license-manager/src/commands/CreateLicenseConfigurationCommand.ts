// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateLicenseConfigurationRequest, CreateLicenseConfigurationResponse } from "../models/models_0";
import { CreateLicenseConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseConfigurationCommand}.
 */
export interface CreateLicenseConfigurationCommandInput extends CreateLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseConfigurationCommand}.
 */
export interface CreateLicenseConfigurationCommandOutput extends CreateLicenseConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a license configuration.</p>
 *          <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), license affinity  to host (how long a
 *          license must be associated with a host), and the number of licenses purchased and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseConfigurationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LicenseCountingType: "vCPU" || "Instance" || "Core" || "Socket", // required
 *   LicenseCount: Number("long"),
 *   LicenseCountHardLimit: true || false,
 *   LicenseRules: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DisassociateWhenNotFound: true || false,
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
 * };
 * const command = new CreateLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseConfigurationResponse
 * //   LicenseConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseConfigurationCommandInput - {@link CreateLicenseConfigurationCommandInput}
 * @returns {@link CreateLicenseConfigurationCommandOutput}
 * @see {@link CreateLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConfigurationCommandOutput} for command's `response` shape.
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
export class CreateLicenseConfigurationCommand extends $Command
  .classBuilder<
    CreateLicenseConfigurationCommandInput,
    CreateLicenseConfigurationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "CreateLicenseConfiguration", {})
  .n("LicenseManagerClient", "CreateLicenseConfigurationCommand")
  .sc(CreateLicenseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseConfigurationRequest;
      output: CreateLicenseConfigurationResponse;
    };
    sdk: {
      input: CreateLicenseConfigurationCommandInput;
      output: CreateLicenseConfigurationCommandOutput;
    };
  };
}
