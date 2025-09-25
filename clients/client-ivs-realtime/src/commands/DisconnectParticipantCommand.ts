// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0";
import { DisconnectParticipant } from "../schemas/schemas_6_Participant";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Disconnects a specified participant from a specified stage. If the participant is publishing using
 *             an <a>IngestConfiguration</a>, DisconnectParticipant also updates the <code>stageArn</code>
 * 	    in the IngestConfiguration to be an empty string.</p>
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
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class DisconnectParticipantCommand extends $Command
  .classBuilder<
    DisconnectParticipantCommandInput,
    DisconnectParticipantCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "DisconnectParticipant", {})
  .n("IVSRealTimeClient", "DisconnectParticipantCommand")
  .sc(DisconnectParticipant)
  .build() {
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
