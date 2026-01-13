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
import type { PublishTypeInput, PublishTypeOutput } from "../models/models_0";
import { PublishType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishTypeCommand}.
 */
export interface PublishTypeCommandInput extends PublishTypeInput {}
/**
 * @public
 *
 * The output of {@link PublishTypeCommand}.
 */
export interface PublishTypeCommandOutput extends PublishTypeOutput, __MetadataBearer {}

/**
 * <p>Publishes the specified extension to the CloudFormation registry as a public extension in this
 *       Region. Public extensions are available for use by all CloudFormation users. For more information
 *       about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to
 *         make them available for public use</a> in the
 *       <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
 *          <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more
 *       information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, PublishTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, PublishTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // PublishTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   Arn: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   PublicVersionNumber: "STRING_VALUE",
 * };
 * const command = new PublishTypeCommand(input);
 * const response = await client.send(command);
 * // { // PublishTypeOutput
 * //   PublicTypeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishTypeCommandInput - {@link PublishTypeCommandInput}
 * @returns {@link PublishTypeCommandOutput}
 * @see {@link PublishTypeCommandInput} for command's `input` shape.
 * @see {@link PublishTypeCommandOutput} for command's `response` shape.
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
export class PublishTypeCommand extends $Command
  .classBuilder<
    PublishTypeCommandInput,
    PublishTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "PublishType", {})
  .n("CloudFormationClient", "PublishTypeCommand")
  .sc(PublishType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishTypeInput;
      output: PublishTypeOutput;
    };
    sdk: {
      input: PublishTypeCommandInput;
      output: PublishTypeCommandOutput;
    };
  };
}
