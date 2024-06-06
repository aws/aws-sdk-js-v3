// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateStateMachineAliasInput,
  UpdateStateMachineAliasInputFilterSensitiveLog,
  UpdateStateMachineAliasOutput,
} from "../models/models_0";
import { de_UpdateStateMachineAliasCommand, se_UpdateStateMachineAliasCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStateMachineAliasCommand}.
 */
export interface UpdateStateMachineAliasCommandInput extends UpdateStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link UpdateStateMachineAliasCommand}.
 */
export interface UpdateStateMachineAliasCommandOutput extends UpdateStateMachineAliasOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> by modifying its <code>description</code> or <code>routingConfiguration</code>.</p>
 *          <p>You must specify at least one of the <code>description</code> or <code>routingConfiguration</code> parameters to update a state machine alias.</p>
 *          <note>
 *             <p>
 *                <code>UpdateStateMachineAlias</code> is an idempotent API. Step Functions bases the
 *         idempotency check on the <code>stateMachineAliasArn</code>, <code>description</code>, and
 *           <code>routingConfiguration</code> parameters. Requests with the same parameters return an
 *         idempotent response.</p>
 *          </note>
 *          <note>
 *             <p>This operation is eventually consistent. All <a>StartExecution</a> requests
 *         made within a few seconds use the latest alias configuration. Executions started immediately
 *         after calling <code>UpdateStateMachineAlias</code> may use the previous routing
 *         configuration.</p>
 *          </note>
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
 *                   <a>DeleteStateMachineAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // UpdateStateMachineAliasInput
 *   stateMachineAliasArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   routingConfiguration: [ // RoutingConfigurationList
 *     { // RoutingConfigurationListItem
 *       stateMachineVersionArn: "STRING_VALUE", // required
 *       weight: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStateMachineAliasOutput
 * //   updateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateStateMachineAliasCommandInput - {@link UpdateStateMachineAliasCommandInput}
 * @returns {@link UpdateStateMachineAliasCommandOutput}
 * @see {@link UpdateStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateStateMachineAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class UpdateStateMachineAliasCommand extends $Command
  .classBuilder<
    UpdateStateMachineAliasCommandInput,
    UpdateStateMachineAliasCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "UpdateStateMachineAlias", {})
  .n("SFNClient", "UpdateStateMachineAliasCommand")
  .f(UpdateStateMachineAliasInputFilterSensitiveLog, void 0)
  .ser(se_UpdateStateMachineAliasCommand)
  .de(de_UpdateStateMachineAliasCommand)
  .build() {}
