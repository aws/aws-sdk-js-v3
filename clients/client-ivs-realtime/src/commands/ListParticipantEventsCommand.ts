// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { ListParticipantEventsRequest, ListParticipantEventsResponse } from "../models/models_0";
import { ListParticipantEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListParticipantEventsCommand}.
 */
export interface ListParticipantEventsCommandInput extends ListParticipantEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListParticipantEventsCommand}.
 */
export interface ListParticipantEventsCommandOutput extends ListParticipantEventsResponse, __MetadataBearer {}

/**
 * <p>Lists events for a specified participant that occurred during a specified stage
 *          session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListParticipantEventsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListParticipantEventsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListParticipantEventsRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListParticipantEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListParticipantEventsResponse
 * //   events: [ // EventList // required
 * //     { // Event
 * //       name: "STRING_VALUE",
 * //       participantId: "STRING_VALUE",
 * //       eventTime: new Date("TIMESTAMP"),
 * //       remoteParticipantId: "STRING_VALUE",
 * //       errorCode: "INSUFFICIENT_CAPABILITIES" || "QUOTA_EXCEEDED" || "PUBLISHER_NOT_FOUND" || "BITRATE_EXCEEDED" || "RESOLUTION_EXCEEDED" || "STREAM_DURATION_EXCEEDED" || "INVALID_AUDIO_CODEC" || "INVALID_VIDEO_CODEC" || "INVALID_PROTOCOL" || "INVALID_STREAM_KEY" || "REUSE_OF_STREAM_KEY" || "B_FRAME_PRESENT" || "INVALID_INPUT" || "INTERNAL_SERVER_EXCEPTION",
 * //       destinationStageArn: "STRING_VALUE",
 * //       destinationSessionId: "STRING_VALUE",
 * //       replica: true || false,
 * //       previousToken: { // ExchangedParticipantToken
 * //         capabilities: [ // ParticipantTokenCapabilities
 * //           "STRING_VALUE",
 * //         ],
 * //         attributes: { // ParticipantTokenAttributes
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         userId: "STRING_VALUE",
 * //         expirationTime: new Date("TIMESTAMP"),
 * //       },
 * //       newToken: {
 * //         capabilities: [
 * //           "STRING_VALUE",
 * //         ],
 * //         attributes: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         userId: "STRING_VALUE",
 * //         expirationTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListParticipantEventsCommandInput - {@link ListParticipantEventsCommandInput}
 * @returns {@link ListParticipantEventsCommandOutput}
 * @see {@link ListParticipantEventsCommandInput} for command's `input` shape.
 * @see {@link ListParticipantEventsCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class ListParticipantEventsCommand extends $Command
  .classBuilder<
    ListParticipantEventsCommandInput,
    ListParticipantEventsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListParticipantEvents", {})
  .n("IVSRealTimeClient", "ListParticipantEventsCommand")
  .sc(ListParticipantEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListParticipantEventsRequest;
      output: ListParticipantEventsResponse;
    };
    sdk: {
      input: ListParticipantEventsCommandInput;
      output: ListParticipantEventsCommandOutput;
    };
  };
}
