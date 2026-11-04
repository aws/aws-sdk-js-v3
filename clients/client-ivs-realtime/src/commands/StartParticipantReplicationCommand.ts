// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartParticipantReplicationRequest, StartParticipantReplicationResponse } from "../models/models_0";
import { StartParticipantReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartParticipantReplicationCommand}.
 */
export interface StartParticipantReplicationCommandInput extends StartParticipantReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartParticipantReplicationCommand}.
 */
export interface StartParticipantReplicationCommandOutput extends StartParticipantReplicationResponse, __MetadataBearer {}

/**
 * Starts replicating a publishing participant from a source stage to a destination stage.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, StartParticipantReplicationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, StartParticipantReplicationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // StartParticipantReplicationRequest
 *   sourceStageArn: "STRING_VALUE", // required
 *   destinationStageArn: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 *   reconnectWindowSeconds: Number("int"),
 *   attributes: { // ParticipantAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartParticipantReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartParticipantReplicationResponse
 * //   accessControlAllowOrigin: "STRING_VALUE",
 * //   accessControlExposeHeaders: "STRING_VALUE",
 * //   cacheControl: "STRING_VALUE",
 * //   contentSecurityPolicy: "STRING_VALUE",
 * //   strictTransportSecurity: "STRING_VALUE",
 * //   xContentTypeOptions: "STRING_VALUE",
 * //   xFrameOptions: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartParticipantReplicationCommandInput - {@link StartParticipantReplicationCommandInput}
 * @returns {@link StartParticipantReplicationCommandOutput}
 * @see {@link StartParticipantReplicationCommandInput} for command's `input` shape.
 * @see {@link StartParticipantReplicationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class StartParticipantReplicationCommand extends command<StartParticipantReplicationCommandInput, StartParticipantReplicationCommandOutput>(
  _ep0,
  _mw0,
  "StartParticipantReplication",
  StartParticipantReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartParticipantReplicationRequest;
      output: StartParticipantReplicationResponse;
    };
    sdk: {
      input: StartParticipantReplicationCommandInput;
      output: StartParticipantReplicationCommandOutput;
    };
  };
}
