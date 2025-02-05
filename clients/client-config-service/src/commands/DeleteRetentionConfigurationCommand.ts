// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRetentionConfigurationRequest } from "../models/models_0";
import {
  de_DeleteRetentionConfigurationCommand,
  se_DeleteRetentionConfigurationCommand,
} from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeleteRetentionConfiguration", {})
  .n("ConfigServiceClient", "DeleteRetentionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRetentionConfigurationCommand)
  .de(de_DeleteRetentionConfigurationCommand)
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
