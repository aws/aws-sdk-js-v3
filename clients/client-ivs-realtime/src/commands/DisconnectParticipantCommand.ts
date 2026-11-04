// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0";
import { DisconnectParticipant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisconnectParticipantCommand}.
 */
export interface DisconnectParticipantCommandInput extends DisconnectParticipantRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectParticipantCommand}.
 */
export interface DisconnectParticipantCommandOutput extends DisconnectParticipantResponse, __MetadataBearer {}

/**
 * Disconnects a specified participant from a specified stage. If the participant is publishing using an IngestConfiguration, DisconnectParticipant also updates the `stageArn` in the IngestConfiguration to be an empty string.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DisconnectParticipantCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DisconnectParticipantCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DisconnectParticipantRequest
 *   stageArn: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new DisconnectParticipantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectParticipantCommandInput - {@link DisconnectParticipantCommandInput}
 * @returns {@link DisconnectParticipantCommandOutput}
 * @see {@link DisconnectParticipantCommandInput} for command's `input` shape.
 * @see {@link DisconnectParticipantCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class DisconnectParticipantCommand extends command<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput>(
  _ep0,
  _mw0,
  "DisconnectParticipant",
  DisconnectParticipant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisconnectParticipantRequest;
      output: {};
    };
    sdk: {
      input: DisconnectParticipantCommandInput;
      output: DisconnectParticipantCommandOutput;
    };
  };
}
