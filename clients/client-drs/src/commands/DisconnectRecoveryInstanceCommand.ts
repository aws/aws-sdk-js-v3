// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisconnectRecoveryInstanceRequest } from "../models/models_0";
import { DisconnectRecoveryInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisconnectRecoveryInstanceCommand}.
 */
export interface DisconnectRecoveryInstanceCommandInput extends DisconnectRecoveryInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectRecoveryInstanceCommand}.
 */
export interface DisconnectRecoveryInstanceCommandOutput extends __MetadataBearer {}

/**
 * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DisconnectRecoveryInstanceCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DisconnectRecoveryInstanceCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DisconnectRecoveryInstanceRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new DisconnectRecoveryInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectRecoveryInstanceCommandInput - {@link DisconnectRecoveryInstanceCommandInput}
 * @returns {@link DisconnectRecoveryInstanceCommandOutput}
 * @see {@link DisconnectRecoveryInstanceCommandInput} for command's `input` shape.
 * @see {@link DisconnectRecoveryInstanceCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class DisconnectRecoveryInstanceCommand extends command<DisconnectRecoveryInstanceCommandInput, DisconnectRecoveryInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DisconnectRecoveryInstance",
  DisconnectRecoveryInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisconnectRecoveryInstanceRequest;
      output: {};
    };
    sdk: {
      input: DisconnectRecoveryInstanceCommandInput;
      output: DisconnectRecoveryInstanceCommandOutput;
    };
  };
}
