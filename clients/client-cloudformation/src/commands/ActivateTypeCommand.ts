// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateTypeInput, ActivateTypeOutput } from "../models/models_0";
import { ActivateType } from "../schemas/schemas_21_Type";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Activates a public third-party extension, such as a resource or module, to make it
 *       available for use in stack templates in your current account and Region. It can also create
 *       CloudFormation Hooks, which allow you to evaluate resource configurations before CloudFormation
 *       provisions them. Hooks integrate with both CloudFormation and Cloud Control API operations.</p>
 *          <p>After you activate an extension, you can use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to set specific properties for the extension.</p>
 *          <p>To see which extensions have been activated, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html">ListTypes</a>. To see
 *       configuration details for an extension, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public-activate-extension.html">Activate a
 *         third-party public extension in your account</a> in the
 *         <i>CloudFormation User Guide</i>. For information about creating Hooks, see the
 *         <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html">CloudFormation
 *         Hooks User Guide</a>.</p>
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
export class ActivateTypeCommand extends $Command
  .classBuilder<
    ActivateTypeCommandInput,
    ActivateTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ActivateType", {})
  .n("CloudFormationClient", "ActivateTypeCommand")
  .sc(ActivateType)
  .build() {
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
