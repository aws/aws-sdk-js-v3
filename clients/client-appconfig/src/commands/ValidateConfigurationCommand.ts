// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidateConfigurationRequest } from "../models/models_0";
import { ValidateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidateConfigurationCommand}.
 */
export interface ValidateConfigurationCommandInput extends ValidateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ValidateConfigurationCommand}.
 */
export interface ValidateConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Uses the validators in a configuration profile to validate a configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ValidateConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ValidateConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ValidateConfigurationRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   ConfigurationVersion: "STRING_VALUE", // required
 * };
 * const command = new ValidateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ValidateConfigurationCommandInput - {@link ValidateConfigurationCommandInput}
 * @returns {@link ValidateConfigurationCommandOutput}
 * @see {@link ValidateConfigurationCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To validate a configuration
 * ```javascript
 * // The following validate-configuration example uses the validators in a configuration profile to validate a configuration.
 * const input = {
 *   ApplicationId: "abc1234",
 *   ConfigurationProfileId: "ur8hx2f",
 *   ConfigurationVersion: "1"
 * };
 * const command = new ValidateConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ValidateConfigurationCommand extends command<ValidateConfigurationCommandInput, ValidateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "ValidateConfiguration",
  ValidateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateConfigurationRequest;
      output: {};
    };
    sdk: {
      input: ValidateConfigurationCommandInput;
      output: ValidateConfigurationCommandOutput;
    };
  };
}
