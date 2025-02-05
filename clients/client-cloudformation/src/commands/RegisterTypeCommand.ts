// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterTypeInput, RegisterTypeOutput } from "../models/models_1";
import { de_RegisterTypeCommand, se_RegisterTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTypeCommand}.
 */
export interface RegisterTypeCommandInput extends RegisterTypeInput {}
/**
 * @public
 *
 * The output of {@link RegisterTypeCommand}.
 */
export interface RegisterTypeCommandOutput extends RegisterTypeOutput, __MetadataBearer {}

/**
 * <p>Registers an extension with the CloudFormation service. Registering an extension makes it
 *       available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p>
 *          <ul>
 *             <li>
 *                <p>Validating the extension schema.</p>
 *             </li>
 *             <li>
 *                <p>Determining which handlers, if any, have been specified for the extension.</p>
 *             </li>
 *             <li>
 *                <p>Making the extension available for use in your account.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to develop extensions and ready them for registration, see
 *         <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating resource types using the CloudFormation CLI</a> in the
 *         <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
 *          <p>You can have a maximum of 50 resource extension versions registered at a time. This
 *       maximum is per account and per Region. Use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a>
 *       to deregister specific extension versions if necessary.</p>
 *          <p>Once you have initiated a registration request using <a>RegisterType</a>, you
 *       can use <a>DescribeTypeRegistration</a> to monitor the progress of the registration
 *       request.</p>
 *          <p>Once you have registered a private extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html">Edit configuration
 *         data for extensions in your account</a> in the
 *       <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // RegisterTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE", // required
 *   SchemaHandlerPackage: "STRING_VALUE", // required
 *   LoggingConfig: { // LoggingConfig
 *     LogRoleArn: "STRING_VALUE", // required
 *     LogGroupName: "STRING_VALUE", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new RegisterTypeCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTypeOutput
 * //   RegistrationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTypeCommandInput - {@link RegisterTypeCommandInput}
 * @returns {@link RegisterTypeCommandOutput}
 * @see {@link RegisterTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class RegisterTypeCommand extends $Command
  .classBuilder<
    RegisterTypeCommandInput,
    RegisterTypeCommandOutput,
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
  .s("CloudFormation", "RegisterType", {})
  .n("CloudFormationClient", "RegisterTypeCommand")
  .f(void 0, void 0)
  .ser(se_RegisterTypeCommand)
  .de(de_RegisterTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTypeInput;
      output: RegisterTypeOutput;
    };
    sdk: {
      input: RegisterTypeCommandInput;
      output: RegisterTypeCommandOutput;
    };
  };
}
