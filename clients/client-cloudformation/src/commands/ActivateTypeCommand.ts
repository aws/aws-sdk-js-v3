// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateTypeInput, ActivateTypeOutput } from "../models/models_0";
import { de_ActivateTypeCommand, se_ActivateTypeCommand } from "../protocols/Aws_query";

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
 * <p>Activates a public third-party extension, making it available for use in stack templates.
 *       Once you have activated a public third-party extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public
 *         extensions</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ActivateTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ActivateTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ActivateType", {})
  .n("CloudFormationClient", "ActivateTypeCommand")
  .f(void 0, void 0)
  .ser(se_ActivateTypeCommand)
  .de(de_ActivateTypeCommand)
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
