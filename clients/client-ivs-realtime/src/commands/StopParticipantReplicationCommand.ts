// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { StopParticipantReplicationRequest, StopParticipantReplicationResponse } from "../models/models_0";
import { StopParticipantReplication } from "../schemas/schemas_9_Participant";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopParticipantReplicationCommand}.
 */
export interface StopParticipantReplicationCommandInput extends StopParticipantReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopParticipantReplicationCommand}.
 */
export interface StopParticipantReplicationCommandOutput extends StopParticipantReplicationResponse, __MetadataBearer {}

/**
 * <p>Stops a replicated participant session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, StopParticipantReplicationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, StopParticipantReplicationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // StopParticipantReplicationRequest
 *   sourceStageArn: "STRING_VALUE", // required
 *   destinationStageArn: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 * };
 * const command = new StopParticipantReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopParticipantReplicationResponse
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
 * @param StopParticipantReplicationCommandInput - {@link StopParticipantReplicationCommandInput}
 * @returns {@link StopParticipantReplicationCommandOutput}
 * @see {@link StopParticipantReplicationCommandInput} for command's `input` shape.
 * @see {@link StopParticipantReplicationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
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
export class StopParticipantReplicationCommand extends $Command
  .classBuilder<
    StopParticipantReplicationCommandInput,
    StopParticipantReplicationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "StopParticipantReplication", {})
  .n("IVSRealTimeClient", "StopParticipantReplicationCommand")
  .sc(StopParticipantReplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopParticipantReplicationRequest;
      output: StopParticipantReplicationResponse;
    };
    sdk: {
      input: StopParticipantReplicationCommandInput;
      output: StopParticipantReplicationCommandOutput;
    };
  };
}
