// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetTypeConfigurationInput, SetTypeConfigurationOutput } from "../models/models_0";
import { SetTypeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Specifies the configuration data for a CloudFormation extension, such as a resource or Hook, in the given account and Region.
 *
 * For more information, see [Edit configuration data for extensions in your account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html) in the *CloudFormation User Guide*.
 *
 * To view the current configuration data for an extension, refer to the `ConfigurationSchema` element of [DescribeType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html).
 *
 * > **Important:** It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more information, see [Specify values stored in other services using dynamic references](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) in the *CloudFormation User Guide*.
 *
 * For more information about setting the configuration data for resource types, see [Defining the account-level configuration of an extension](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration) in the *CloudFormation Command Line Interface (CLI) User Guide*. For more information about setting the configuration data for Hooks, see the [CloudFormation Hooks User Guide](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html).
 *
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
 *
 * An error occurred during a CloudFormation registry operation.
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *
 * The specified extension doesn't exist in the CloudFormation registry.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class SetTypeConfigurationCommand extends command<SetTypeConfigurationCommandInput, SetTypeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "SetTypeConfiguration",
  SetTypeConfiguration$
) {
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
