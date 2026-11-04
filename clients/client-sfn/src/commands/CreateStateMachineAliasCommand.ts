// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStateMachineAliasInput, CreateStateMachineAliasOutput } from "../models/models_0";
import { CreateStateMachineAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStateMachineAliasCommand}.
 */
export interface CreateStateMachineAliasCommandInput extends CreateStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link CreateStateMachineAliasCommand}.
 */
export interface CreateStateMachineAliasCommandOutput extends CreateStateMachineAliasOutput, __MetadataBearer {}

/**
 * Creates an [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) for a state machine that points to one or two [versions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code.
 *
 * You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second `RoutingConfig` object in the `routingConfiguration` parameter. You must also specify the percentage of execution run requests each version should receive in both `RoutingConfig` objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify.
 *
 * To create an alias that points to a single version, specify a single `RoutingConfig` object with a `weight` set to 100.
 *
 * You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action.
 *
 * `CreateStateMachineAlias` is an idempotent API. Step Functions bases the idempotency check on the `stateMachineArn`, `description`, `name`, and `routingConfiguration` parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource.
 *
 * **Related operations:**
 *
 * - DescribeStateMachineAlias
 * - ListStateMachineAliases
 * - UpdateStateMachineAlias
 * - DeleteStateMachineAlias
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // CreateStateMachineAliasInput
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   routingConfiguration: [ // RoutingConfigurationList // required
 *     { // RoutingConfigurationListItem
 *       stateMachineVersionArn: "STRING_VALUE", // required
 *       weight: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new CreateStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateStateMachineAliasOutput
 * //   stateMachineAliasArn: "STRING_VALUE", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateStateMachineAliasCommandInput - {@link CreateStateMachineAliasCommandInput}
 * @returns {@link CreateStateMachineAliasCommandOutput}
 * @see {@link CreateStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link CreateStateMachineAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidName} (client fault)
 *
 * The provided name is not valid.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Could not find the referenced resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * HTTP Status Code: 402
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
export class CreateStateMachineAliasCommand extends command<CreateStateMachineAliasCommandInput, CreateStateMachineAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateStateMachineAlias",
  CreateStateMachineAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStateMachineAliasInput;
      output: CreateStateMachineAliasOutput;
    };
    sdk: {
      input: CreateStateMachineAliasCommandInput;
      output: CreateStateMachineAliasCommandOutput;
    };
  };
}
