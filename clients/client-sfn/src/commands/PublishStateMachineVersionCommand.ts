// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishStateMachineVersionInput, PublishStateMachineVersionOutput } from "../models/models_0";
import { PublishStateMachineVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishStateMachineVersionCommand}.
 */
export interface PublishStateMachineVersionCommandInput extends PublishStateMachineVersionInput {}
/**
 * @public
 *
 * The output of {@link PublishStateMachineVersionCommand}.
 */
export interface PublishStateMachineVersionCommandOutput extends PublishStateMachineVersionOutput, __MetadataBearer {}

/**
 * Creates a [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias.
 *
 * You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action.
 *
 * `PublishStateMachineVersion` is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases `PublishStateMachineVersion`'s idempotency check on the `stateMachineArn`, `name`, and `revisionId` parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a `revisionId`, Step Functions checks for a previously published version of the state machine's current revision.
 *
 * **Related operations:**
 *
 * - DeleteStateMachineVersion
 * - ListStateMachineVersions
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, PublishStateMachineVersionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, PublishStateMachineVersionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // PublishStateMachineVersionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new PublishStateMachineVersionCommand(input);
 * const response = await client.send(command);
 * // { // PublishStateMachineVersionOutput
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   stateMachineVersionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PublishStateMachineVersionCommandInput - {@link PublishStateMachineVersionCommandInput}
 * @returns {@link PublishStateMachineVersionCommandOutput}
 * @see {@link PublishStateMachineVersionCommandInput} for command's `input` shape.
 * @see {@link PublishStateMachineVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
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
export class PublishStateMachineVersionCommand extends command<PublishStateMachineVersionCommandInput, PublishStateMachineVersionCommandOutput>(
  _ep0,
  _mw0,
  "PublishStateMachineVersion",
  PublishStateMachineVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishStateMachineVersionInput;
      output: PublishStateMachineVersionOutput;
    };
    sdk: {
      input: PublishStateMachineVersionCommandInput;
      output: PublishStateMachineVersionCommandOutput;
    };
  };
}
