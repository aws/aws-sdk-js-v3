// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishTypeInput, PublishTypeOutput } from "../models/models_0";
import { PublishType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Publishes the specified extension to the CloudFormation registry as a public extension in this Region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see [RegisterPublisher](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html).
 *
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
export class PublishTypeCommand extends command<PublishTypeCommandInput, PublishTypeCommandOutput>(
  _ep0,
  _mw0,
  "PublishType",
  PublishType$
) {
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
