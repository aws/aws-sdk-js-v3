// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStateMachineVersionInput, DeleteStateMachineVersionOutput } from "../models/models_0";
import { DeleteStateMachineVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a state machine [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html). After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html).
 *
 * > **Note:** Deleting a state machine version won't terminate its in-progress executions.
 *
 * > **Note:** You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.
 *
 * **Related operations:**
 *
 * - PublishStateMachineVersion
 * - ListStateMachineVersions
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineVersionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineVersionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
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
 *
 * Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for DeleteStateMachineVersion, PublishStateMachineVersion, or UpdateStateMachine with the `publish` parameter set to `true`.
 *
 * HTTP Status Code: 409
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
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
export class DeleteStateMachineVersionCommand extends command<DeleteStateMachineVersionCommandInput, DeleteStateMachineVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStateMachineVersion",
  DeleteStateMachineVersion$
) {
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
