// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStateMachineAliasInput, DeleteStateMachineAliasOutput } from "../models/models_0";
import { DeleteStateMachineAlias } from "../schemas/schemas_2_StateMachine";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineAliasCommand}.
 */
export interface DeleteStateMachineAliasCommandInput extends DeleteStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineAliasCommand}.
 */
export interface DeleteStateMachineAliasCommandOutput extends DeleteStateMachineAliasOutput, __MetadataBearer {}

/**
 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <p>After you delete a state machine alias, you can't use it to start executions. When you
 *       delete a state machine alias, Step Functions doesn't delete the state machine versions
 *       that alias references.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateStateMachineAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineAliasInput
 *   stateMachineAliasArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineAliasCommandInput - {@link DeleteStateMachineAliasCommandInput}
 * @returns {@link DeleteStateMachineAliasCommandOutput}
 * @see {@link DeleteStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineAliasCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class DeleteStateMachineAliasCommand extends $Command
  .classBuilder<
    DeleteStateMachineAliasCommandInput,
    DeleteStateMachineAliasCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "DeleteStateMachineAlias", {})
  .n("SFNClient", "DeleteStateMachineAliasCommand")
  .sc(DeleteStateMachineAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStateMachineAliasInput;
      output: {};
    };
    sdk: {
      input: DeleteStateMachineAliasCommandInput;
      output: DeleteStateMachineAliasCommandOutput;
    };
  };
}
