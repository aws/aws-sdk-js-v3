// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/models_0";
import { GetServiceSettings } from "../schemas/schemas_14_ServiceSettings";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandInput extends GetServiceSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandOutput extends GetServiceSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets the License Manager settings for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetServiceSettingsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetServiceSettingsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = {};
 * const command = new GetServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSettingsResponse
 * //   S3BucketArn: "STRING_VALUE",
 * //   SnsTopicArn: "STRING_VALUE",
 * //   OrganizationConfiguration: { // OrganizationConfiguration
 * //     EnableIntegration: true || false, // required
 * //   },
 * //   EnableCrossAccountsDiscovery: true || false,
 * //   LicenseManagerResourceShareArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceSettingsCommandInput - {@link GetServiceSettingsCommandInput}
 * @returns {@link GetServiceSettingsCommandOutput}
 * @see {@link GetServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
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
export class GetServiceSettingsCommand extends $Command
  .classBuilder<
    GetServiceSettingsCommandInput,
    GetServiceSettingsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "GetServiceSettings", {})
  .n("LicenseManagerClient", "GetServiceSettingsCommand")
  .sc(GetServiceSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServiceSettingsResponse;
    };
    sdk: {
      input: GetServiceSettingsCommandInput;
      output: GetServiceSettingsCommandOutput;
    };
  };
}
