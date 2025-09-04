// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterTypeInput, DeregisterTypeOutput } from "../models/models_0";
import { de_DeregisterTypeCommand, se_DeregisterTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTypeCommand}.
 */
export interface DeregisterTypeCommandInput extends DeregisterTypeInput {}
/**
 * @public
 *
 * The output of {@link DeregisterTypeCommand}.
 */
export interface DeregisterTypeCommandOutput extends DeregisterTypeOutput, __MetadataBearer {}

/**
 * <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation
 *       registry, removing it from active use. Deprecated extensions or extension versions cannot be
 *       used in CloudFormation operations.</p>
 *          <p>To deregister an entire extension, you must individually deregister all active versions of
 *       that extension. If an extension has only a single active version, deregistering that version
 *       results in the extension itself being deregistered and marked as deprecated in the
 *       registry.</p>
 *          <p>You can't deregister the default version of an extension if there are other active version
 *       of that extension. If you do deregister the default version of an extension, the extension
 *       type itself is deregistered as well and marked as deprecated.</p>
 *          <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-private-deregister-extension.html">Remove
 *         third-party private extensions from your account</a> in the
 *         <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeregisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeregisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DeregisterTypeInput
 *   Arn: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 * };
 * const command = new DeregisterTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterTypeCommandInput - {@link DeregisterTypeCommandInput}
 * @returns {@link DeregisterTypeCommandOutput}
 * @see {@link DeregisterTypeCommandInput} for command's `input` shape.
 * @see {@link DeregisterTypeCommandOutput} for command's `response` shape.
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
export class DeregisterTypeCommand extends $Command
  .classBuilder<
    DeregisterTypeCommandInput,
    DeregisterTypeCommandOutput,
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
  .s("CloudFormation", "DeregisterType", {})
  .n("CloudFormationClient", "DeregisterTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterTypeCommand)
  .de(de_DeregisterTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTypeInput;
      output: {};
    };
    sdk: {
      input: DeregisterTypeCommandInput;
      output: DeregisterTypeCommandOutput;
    };
  };
}
