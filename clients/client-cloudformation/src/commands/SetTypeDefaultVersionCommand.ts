// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_1";
import { de_SetTypeDefaultVersionCommand, se_SetTypeDefaultVersionCommand } from "../protocols/Aws_query";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "SetTypeDefaultVersion", {})
  .n("CloudFormationClient", "SetTypeDefaultVersionCommand")
  .f(void 0, void 0)
  .ser(se_SetTypeDefaultVersionCommand)
  .de(de_SetTypeDefaultVersionCommand)
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
