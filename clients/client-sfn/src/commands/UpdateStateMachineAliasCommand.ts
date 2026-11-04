// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStateMachineAliasInput, UpdateStateMachineAliasOutput } from "../models/models_0";
import { UpdateStateMachineAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration of an existing state machine [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) by modifying its `description` or `routingConfiguration`.
 *
 * You must specify at least one of the `description` or `routingConfiguration` parameters to update a state machine alias.
 *
 * > **Note:** `UpdateStateMachineAlias` is an idempotent API. Step Functions bases the idempotency check on the `stateMachineAliasArn`, `description`, and `routingConfiguration` parameters. Requests with the same parameters return an idempotent response.
 *
 * > **Note:** This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling `UpdateStateMachineAlias` may use the previous routing configuration.
 *
 * **Related operations:**
 *
 * - CreateStateMachineAlias
 * - DescribeStateMachineAlias
 * - ListStateMachineAliases
 * - DeleteStateMachineAlias
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
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
 *
 * Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for DeleteStateMachineVersion, PublishStateMachineVersion, or UpdateStateMachine with the `publish` parameter set to `true`.
 *
 * HTTP Status Code: 409
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Could not find the referenced resource.
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class UpdateStateMachineAliasCommand extends command<UpdateStateMachineAliasCommandInput, UpdateStateMachineAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStateMachineAlias",
  UpdateStateMachineAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStateMachineAliasInput;
      output: UpdateStateMachineAliasOutput;
    };
    sdk: {
      input: UpdateStateMachineAliasCommandInput;
      output: UpdateStateMachineAliasCommandOutput;
    };
  };
}
