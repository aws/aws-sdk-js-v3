// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStateMachineVersionInput, DeleteStateMachineVersionOutput } from "../models/models_0";
import { de_DeleteStateMachineVersionCommand, se_DeleteStateMachineVersionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineVersionCommand}.
 */
export interface DeleteStateMachineVersionCommandInput extends DeleteStateMachineVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineVersionCommand}.
 */
export interface DeleteStateMachineVersionCommandOutput extends DeleteStateMachineVersionOutput, __MetadataBearer {}

/**
 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. After
 *       you delete a version, you can't call <a>StartExecution</a> using that version's ARN
 *       or use the version with a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <note>
 *             <p>Deleting a state machine version won't terminate its in-progress executions.</p>
 *          </note>
 *          <note>
 *             <p>You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.</p>
 *          </note>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PublishStateMachineVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineVersions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineVersionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineVersionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineVersionInput
 *   stateMachineVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineVersionCommandInput - {@link DeleteStateMachineVersionCommandInput}
 * @returns {@link DeleteStateMachineVersionCommandOutput}
 * @see {@link DeleteStateMachineVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineVersionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class DeleteStateMachineVersionCommand extends $Command
  .classBuilder<
    DeleteStateMachineVersionCommandInput,
    DeleteStateMachineVersionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DeleteStateMachineVersion", {})
  .n("SFNClient", "DeleteStateMachineVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStateMachineVersionCommand)
  .de(de_DeleteStateMachineVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStateMachineVersionInput;
      output: {};
    };
    sdk: {
      input: DeleteStateMachineVersionCommandInput;
      output: DeleteStateMachineVersionCommandOutput;
    };
  };
}
