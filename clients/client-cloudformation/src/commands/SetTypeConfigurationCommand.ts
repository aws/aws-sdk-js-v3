// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SetTypeConfigurationInput, SetTypeConfigurationOutput } from "../models/models_0";
import { SetTypeConfiguration$ } from "../schemas/schemas_0";

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
 * <p>Specifies the configuration data for a CloudFormation extension, such as a resource or Hook,
 *       in the given account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html">Edit configuration
 *         data for extensions in your account</a> in the
 *       <i>CloudFormation User Guide</i>.</p>
 *          <p>To view the current configuration data for an extension, refer to the
 *         <code>ConfigurationSchema</code> element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
 *          <important>
 *             <p>It's strongly recommended that you use dynamic references to restrict sensitive
 *         configuration definitions, such as third-party credentials. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html">Specify values stored in other services using dynamic references</a> in the
 *           <i>CloudFormation User Guide</i>.</p>
 *          </important>
 *          <p>For more information about setting the configuration data for resource types, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration">Defining the account-level configuration of an extension</a> in the
 *         <i>CloudFormation Command Line Interface (CLI) User Guide</i>. For more information about setting the configuration
 *       data for Hooks, see the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html">CloudFormation Hooks User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeConfigurationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeConfigurationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "SetTypeConfiguration", {})
  .n("CloudFormationClient", "SetTypeConfigurationCommand")
  .sc(SetTypeConfiguration$)
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
