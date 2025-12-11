// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import { RegisterDefaultPatchBaseline } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterDefaultPatchBaselineCommand}.
 */
export interface RegisterDefaultPatchBaselineCommandInput extends RegisterDefaultPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDefaultPatchBaselineCommand}.
 */
export interface RegisterDefaultPatchBaselineCommandOutput
  extends RegisterDefaultPatchBaselineResult,
    __MetadataBearer {}

/**
 * <p>Defines the default patch baseline for the relevant operating system.</p>
 *          <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline
 *    Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify
 *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
 *     <code>pb-0574b43a65ea646ed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterDefaultPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new RegisterDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDefaultPatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterDefaultPatchBaselineCommandInput - {@link RegisterDefaultPatchBaselineCommandInput}
 * @returns {@link RegisterDefaultPatchBaselineCommandOutput}
 * @see {@link RegisterDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class RegisterDefaultPatchBaselineCommand extends $Command
  .classBuilder<
    RegisterDefaultPatchBaselineCommandInput,
    RegisterDefaultPatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "RegisterDefaultPatchBaseline", {})
  .n("SSMClient", "RegisterDefaultPatchBaselineCommand")
  .sc(RegisterDefaultPatchBaseline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDefaultPatchBaselineRequest;
      output: RegisterDefaultPatchBaselineResult;
    };
    sdk: {
      input: RegisterDefaultPatchBaselineCommandInput;
      output: RegisterDefaultPatchBaselineCommandOutput;
    };
  };
}
