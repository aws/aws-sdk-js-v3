// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelCommandRequest, CancelCommandResult } from "../models/models_0";
import { CancelCommand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelCommandCommand}.
 */
export interface CancelCommandCommandInput extends CancelCommandRequest {}
/**
 * @public
 *
 * The output of {@link CancelCommandCommand}.
 */
export interface CancelCommandCommandOutput extends CancelCommandResult, __MetadataBearer {}

/**
 * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CancelCommandRequest
 *   CommandId: "STRING_VALUE", // required
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelCommandCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCommandCommandInput - {@link CancelCommandCommandInput}
 * @returns {@link CancelCommandCommandOutput}
 * @see {@link CancelCommandCommandInput} for command's `input` shape.
 * @see {@link CancelCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DuplicateInstanceId} (client fault)
 *
 * You can't specify a managed node ID in more than one association.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidCommandId} (client fault)
 *
 * The specified command ID isn't valid. Verify the ID and try again.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class CancelCommandCommand extends command<CancelCommandCommandInput, CancelCommandCommandOutput>(
  _ep0,
  _mw0,
  "CancelCommand",
  CancelCommand$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCommandRequest;
      output: {};
    };
    sdk: {
      input: CancelCommandCommandInput;
      output: CancelCommandCommandOutput;
    };
  };
}
