// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterTypeInput, RegisterTypeOutput } from "../models/models_0";
import { RegisterType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:
 *
 * - Validating the extension schema.
 * - Determining which handlers, if any, have been specified for the extension.
 * - Making the extension available for use in your account.
 *
 * For more information about how to develop extensions and ready them for registration, see [Creating resource types using the CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use [DeregisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html) to deregister specific extension versions if necessary.
 *
 * Once you have initiated a registration request using RegisterType, you can use DescribeTypeRegistration to monitor the progress of the registration request.
 *
 * Once you have registered a private extension in your account and Region, use [SetTypeConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html) to specify configuration properties for the extension. For more information, see [Edit configuration data for extensions in your account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html) in the *CloudFormation User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
 *
 * An error occurred during a CloudFormation registry operation.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class RegisterTypeCommand extends command<RegisterTypeCommandInput, RegisterTypeCommandOutput>(
  _ep0,
  _mw0,
  "RegisterType",
  RegisterType$
) {
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
