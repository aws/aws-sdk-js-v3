// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetTypeConfigurationInput, SetTypeConfigurationOutput } from "../models/models_1";
import { de_SetTypeConfigurationCommand, se_SetTypeConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTypeConfigurationCommand}.
 */
export interface SetTypeConfigurationCommandInput extends SetTypeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link SetTypeConfigurationCommand}.
 */
export interface SetTypeConfigurationCommandOutput extends SetTypeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Specifies the configuration data for a registered CloudFormation extension, in the given
 *       account and Region.</p>
 *          <p>To view the current configuration data for an extension, refer to the
 *         <code>ConfigurationSchema</code> element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html">Edit configuration
 *         data for extensions in your account</a> in the
 *       <i>CloudFormation User Guide</i>.</p>
 *          <important>
 *             <p>It's strongly recommended that you use dynamic references to restrict sensitive
 *         configuration definitions, such as third-party credentials. For more details on dynamic
 *         references, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html">Specify values stored in
 *           other services using dynamic references</a> in the
 *           <i>CloudFormation User Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeConfigurationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeConfigurationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // SetTypeConfigurationInput
 *   TypeArn: "STRING_VALUE",
 *   Configuration: "STRING_VALUE", // required
 *   ConfigurationAlias: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 * };
 * const command = new SetTypeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetTypeConfigurationOutput
 * //   ConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetTypeConfigurationCommandInput - {@link SetTypeConfigurationCommandInput}
 * @returns {@link SetTypeConfigurationCommandOutput}
 * @see {@link SetTypeConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetTypeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class SetTypeConfigurationCommand extends $Command
  .classBuilder<
    SetTypeConfigurationCommandInput,
    SetTypeConfigurationCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "SetTypeConfiguration", {})
  .n("CloudFormationClient", "SetTypeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_SetTypeConfigurationCommand)
  .de(de_SetTypeConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTypeConfigurationInput;
      output: SetTypeConfigurationOutput;
    };
    sdk: {
      input: SetTypeConfigurationCommandInput;
      output: SetTypeConfigurationCommandOutput;
    };
  };
}
