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
import type { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_0";
import { SetTypeDefaultVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTypeDefaultVersionCommand}.
 */
export interface SetTypeDefaultVersionCommandInput extends SetTypeDefaultVersionInput {}
/**
 * @public
 *
 * The output of {@link SetTypeDefaultVersionCommand}.
 */
export interface SetTypeDefaultVersionCommandOutput extends SetTypeDefaultVersionOutput, __MetadataBearer {}

/**
 * <p>Specify the default version of an extension. The default version of an extension will be
 *       used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // SetTypeDefaultVersionInput
 *   Arn: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 * };
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTypeDefaultVersionCommandInput - {@link SetTypeDefaultVersionCommandInput}
 * @returns {@link SetTypeDefaultVersionCommandOutput}
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
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
export class SetTypeDefaultVersionCommand extends $Command
  .classBuilder<
    SetTypeDefaultVersionCommandInput,
    SetTypeDefaultVersionCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "SetTypeDefaultVersion", {})
  .n("CloudFormationClient", "SetTypeDefaultVersionCommand")
  .sc(SetTypeDefaultVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTypeDefaultVersionInput;
      output: {};
    };
    sdk: {
      input: SetTypeDefaultVersionCommandInput;
      output: SetTypeDefaultVersionCommandOutput;
    };
  };
}
