// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateTypeInput, ActivateTypeOutput } from "../models/models_0";
import { ActivateType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ActivateTypeCommand}.
 */
export interface ActivateTypeCommandInput extends ActivateTypeInput {}
/**
 * @public
 *
 * The output of {@link ActivateTypeCommand}.
 */
export interface ActivateTypeCommandOutput extends ActivateTypeOutput, __MetadataBearer {}

/**
 * Activates a public third-party extension, such as a resource or module, to make it available for use in stack templates in your current account and Region. It can also create CloudFormation Hooks, which allow you to evaluate resource configurations before CloudFormation provisions them. Hooks integrate with both CloudFormation and Cloud Control API operations.
 *
 * After you activate an extension, you can use [SetTypeConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html) to set specific properties for the extension.
 *
 * To see which extensions have been activated, use [ListTypes](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html). To see configuration details for an extension, use [DescribeType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html).
 *
 * For more information, see [Activate a third-party public extension in your account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public-activate-extension.html) in the *CloudFormation User Guide*. For information about creating Hooks, see the [CloudFormation Hooks User Guide](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ActivateTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ActivateTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ActivateTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   PublicTypeArn: "STRING_VALUE",
 *   PublisherId: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   TypeNameAlias: "STRING_VALUE",
 *   AutoUpdate: true || false,
 *   LoggingConfig: { // LoggingConfig
 *     LogRoleArn: "STRING_VALUE", // required
 *     LogGroupName: "STRING_VALUE", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   VersionBump: "MAJOR" || "MINOR",
 *   MajorVersion: Number("long"),
 * };
 * const command = new ActivateTypeCommand(input);
 * const response = await client.send(command);
 * // { // ActivateTypeOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ActivateTypeCommandInput - {@link ActivateTypeCommandInput}
 * @returns {@link ActivateTypeCommandOutput}
 * @see {@link ActivateTypeCommandInput} for command's `input` shape.
 * @see {@link ActivateTypeCommandOutput} for command's `response` shape.
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
export class ActivateTypeCommand extends command<ActivateTypeCommandInput, ActivateTypeCommandOutput>(
  _ep0,
  _mw0,
  "ActivateType",
  ActivateType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateTypeInput;
      output: ActivateTypeOutput;
    };
    sdk: {
      input: ActivateTypeCommandInput;
      output: ActivateTypeCommandOutput;
    };
  };
}
