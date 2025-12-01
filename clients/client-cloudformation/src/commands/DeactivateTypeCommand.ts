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
import type { DeactivateTypeInput, DeactivateTypeOutput } from "../models/models_0";
import { DeactivateType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateTypeCommand}.
 */
export interface DeactivateTypeCommandInput extends DeactivateTypeInput {}
/**
 * @public
 *
 * The output of {@link DeactivateTypeCommand}.
 */
export interface DeactivateTypeCommandOutput extends DeactivateTypeOutput, __MetadataBearer {}

/**
 * <p>Deactivates a public third-party extension, such as a resource or module, or a CloudFormation
 *       Hook when you no longer use it.</p>
 *          <p>Deactivating an extension deletes the configuration details that are associated with it.
 *       To temporarily disable a CloudFormation Hook instead, you can use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a>.</p>
 *          <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes
 *       stack update operations where the stack template includes the extension, even if no updates
 *       are being made to the extension. In addition, deactivated extensions aren't automatically
 *       updated if a new version of the extension is released.</p>
 *          <p>To see which extensions are currently activated, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html">ListTypes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeactivateTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeactivateTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DeactivateTypeInput
 *   TypeName: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   Arn: "STRING_VALUE",
 * };
 * const command = new DeactivateTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateTypeCommandInput - {@link DeactivateTypeCommandInput}
 * @returns {@link DeactivateTypeCommandOutput}
 * @see {@link DeactivateTypeCommandInput} for command's `input` shape.
 * @see {@link DeactivateTypeCommandOutput} for command's `response` shape.
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
export class DeactivateTypeCommand extends $Command
  .classBuilder<
    DeactivateTypeCommandInput,
    DeactivateTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DeactivateType", {})
  .n("CloudFormationClient", "DeactivateTypeCommand")
  .sc(DeactivateType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateTypeInput;
      output: {};
    };
    sdk: {
      input: DeactivateTypeCommandInput;
      output: DeactivateTypeCommandOutput;
    };
  };
}
