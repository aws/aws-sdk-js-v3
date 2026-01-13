// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { ListParticipantsRequest, ListParticipantsResponse } from "../models/models_0";
import { ListParticipants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListParticipantsCommand}.
 */
export interface ListParticipantsCommandInput extends ListParticipantsRequest {}
/**
 * @public
 *
 * The output of {@link ListParticipantsCommand}.
 */
export interface ListParticipantsCommandOutput extends ListParticipantsResponse, __MetadataBearer {}

/**
 * <p>Lists all participants in a specified stage session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListParticipantsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListParticipantsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListParticipantsRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   filterByUserId: "STRING_VALUE",
 *   filterByPublished: true || false,
 *   filterByState: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filterByRecordingState: "STRING_VALUE",
 * };
 * const command = new ListParticipantsCommand(input);
 * const response = await client.send(command);
 * // { // ListParticipantsResponse
 * //   participants: [ // ParticipantList // required
 * //     { // ParticipantSummary
 * //       participantId: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       firstJoinTime: new Date("TIMESTAMP"),
 * //       published: true || false,
 * //       recordingState: "STRING_VALUE",
 * //       replicationType: "STRING_VALUE",
 * //       replicationState: "STRING_VALUE",
 * //       sourceStageArn: "STRING_VALUE",
 * //       sourceSessionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListParticipantsCommandInput - {@link ListParticipantsCommandInput}
 * @returns {@link ListParticipantsCommandOutput}
 * @see {@link ListParticipantsCommandInput} for command's `input` shape.
 * @see {@link ListParticipantsCommandOutput} for command's `response` shape.
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
export class ListParticipantsCommand extends $Command
  .classBuilder<
    ListParticipantsCommandInput,
    ListParticipantsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListParticipants", {})
  .n("IVSRealTimeClient", "ListParticipantsCommand")
  .sc(ListParticipants$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListParticipantsRequest;
      output: ListParticipantsResponse;
    };
    sdk: {
      input: ListParticipantsCommandInput;
      output: ListParticipantsCommandOutput;
    };
  };
}
