// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterTypeInput, DeregisterTypeOutput } from "../models/models_0";
import { DeregisterType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Marks an extension or extension version as `DEPRECATED` in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.
 *
 * To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.
 *
 * You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.
 *
 * To view the deprecation status of an extension or extension version, use [DescribeType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html).
 *
 * For more information, see [Remove third-party private extensions from your account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-private-deregister-extension.html) in the *CloudFormation User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeregisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeregisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
export class DeregisterTypeCommand extends command<DeregisterTypeCommandInput, DeregisterTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterType",
  DeregisterType$
) {
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
