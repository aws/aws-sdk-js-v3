// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_1";
import { de_UpdateConfigurationCommand, se_UpdateConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector
 *          delegated administrator this updates the setting for all accounts you manage. Member
 *          accounts in an organization cannot update this setting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateConfigurationRequest
 *   ecrConfiguration: { // EcrConfiguration
 *     rescanDuration: "STRING_VALUE", // required
 *     pullDateRescanDuration: "STRING_VALUE",
 *     pullDateRescanMode: "STRING_VALUE",
 *   },
 *   ec2Configuration: { // Ec2Configuration
 *     scanMode: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationCommandInput - {@link UpdateConfigurationCommandInput}
 * @returns {@link UpdateConfigurationCommandOutput}
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class UpdateConfigurationCommand extends $Command
  .classBuilder<
    UpdateConfigurationCommandInput,
    UpdateConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "UpdateConfiguration", {})
  .n("Inspector2Client", "UpdateConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigurationCommand)
  .de(de_UpdateConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationCommandInput;
      output: UpdateConfigurationCommandOutput;
    };
  };
}
