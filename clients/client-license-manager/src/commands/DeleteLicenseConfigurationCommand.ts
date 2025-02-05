// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteLicenseConfigurationRequest, DeleteLicenseConfigurationResponse } from "../models/models_0";
import { de_DeleteLicenseConfigurationCommand, se_DeleteLicenseConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLicenseConfigurationCommand}.
 */
export interface DeleteLicenseConfigurationCommandInput extends DeleteLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseConfigurationCommand}.
 */
export interface DeleteLicenseConfigurationCommandOutput extends DeleteLicenseConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified license configuration.</p>
 *          <p>You cannot delete a license configuration that is in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLicenseConfigurationCommandInput - {@link DeleteLicenseConfigurationCommandInput}
 * @returns {@link DeleteLicenseConfigurationCommandOutput}
 * @see {@link DeleteLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 * @public
 */
export class DeleteLicenseConfigurationCommand extends $Command
  .classBuilder<
    DeleteLicenseConfigurationCommandInput,
    DeleteLicenseConfigurationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "DeleteLicenseConfiguration", {})
  .n("LicenseManagerClient", "DeleteLicenseConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLicenseConfigurationCommand)
  .de(de_DeleteLicenseConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLicenseConfigurationCommandInput;
      output: DeleteLicenseConfigurationCommandOutput;
    };
  };
}
