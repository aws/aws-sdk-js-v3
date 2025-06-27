// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_1";
import { de_PutRetentionConfigurationCommand, se_PutRetentionConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandInput extends PutRetentionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandOutput extends PutRetentionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 *          <note>
 *             <p>Currently, Config supports only one retention
 * 				configuration per region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRetentionConfigurationRequest
 *   RetentionPeriodInDays: Number("int"), // required
 * };
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutRetentionConfigurationResponse
 * //   RetentionConfiguration: { // RetentionConfiguration
 * //     Name: "STRING_VALUE", // required
 * //     RetentionPeriodInDays: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRetentionConfigurationCommandInput - {@link PutRetentionConfigurationCommandInput}
 * @returns {@link PutRetentionConfigurationCommandOutput}
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link MaxNumberOfRetentionConfigurationsExceededException} (client fault)
 *  <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class PutRetentionConfigurationCommand extends $Command
  .classBuilder<
    PutRetentionConfigurationCommandInput,
    PutRetentionConfigurationCommandOutput,
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
  .s("StarlingDoveService", "PutRetentionConfiguration", {})
  .n("ConfigServiceClient", "PutRetentionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutRetentionConfigurationCommand)
  .de(de_PutRetentionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionConfigurationRequest;
      output: PutRetentionConfigurationResponse;
    };
    sdk: {
      input: PutRetentionConfigurationCommandInput;
      output: PutRetentionConfigurationCommandOutput;
    };
  };
}
