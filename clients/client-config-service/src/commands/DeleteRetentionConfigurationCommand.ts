// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRetentionConfigurationRequest } from "../models/models_0";
import { DeleteRetentionConfiguration } from "../schemas/schemas_4_Retention";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRetentionConfigurationCommand}.
 */
export interface DeleteRetentionConfigurationCommandInput extends DeleteRetentionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetentionConfigurationCommand}.
 */
export interface DeleteRetentionConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the retention configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteRetentionConfigurationRequest
 *   RetentionConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetentionConfigurationCommandInput - {@link DeleteRetentionConfigurationCommandInput}
 * @returns {@link DeleteRetentionConfigurationCommandOutput}
 * @see {@link DeleteRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchRetentionConfigurationException} (client fault)
 *  <p>You have specified a retention configuration that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DeleteRetentionConfigurationCommand extends $Command
  .classBuilder<
    DeleteRetentionConfigurationCommandInput,
    DeleteRetentionConfigurationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteRetentionConfiguration", {})
  .n("ConfigServiceClient", "DeleteRetentionConfigurationCommand")
  .sc(DeleteRetentionConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetentionConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetentionConfigurationCommandInput;
      output: DeleteRetentionConfigurationCommandOutput;
    };
  };
}
