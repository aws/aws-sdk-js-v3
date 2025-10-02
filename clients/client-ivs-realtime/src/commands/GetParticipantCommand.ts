// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetParticipantRequest, GetParticipantResponse } from "../models/models_0";
import { de_GetParticipantCommand, se_GetParticipantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParticipantCommand}.
 */
export interface GetParticipantCommandInput extends GetParticipantRequest {}
/**
 * @public
 *
 * The output of {@link GetParticipantCommand}.
 */
export interface GetParticipantCommandOutput extends GetParticipantResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified participant token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetParticipantCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetParticipantCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetParticipantRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 * };
 * const command = new GetParticipantCommand(input);
 * const response = await client.send(command);
 * // { // GetParticipantResponse
 * //   participant: { // Participant
 * //     participantId: "STRING_VALUE",
 * //     userId: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     firstJoinTime: new Date("TIMESTAMP"),
 * //     attributes: { // ParticipantAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     published: true || false,
 * //     ispName: "STRING_VALUE",
 * //     osName: "STRING_VALUE",
 * //     osVersion: "STRING_VALUE",
 * //     browserName: "STRING_VALUE",
 * //     browserVersion: "STRING_VALUE",
 * //     sdkVersion: "STRING_VALUE",
 * //     recordingS3BucketName: "STRING_VALUE",
 * //     recordingS3Prefix: "STRING_VALUE",
 * //     recordingState: "STRING_VALUE",
 * //     protocol: "UNKNOWN" || "WHIP" || "RTMP" || "RTMPS",
 * //     replicationType: "STRING_VALUE",
 * //     replicationState: "STRING_VALUE",
 * //     sourceStageArn: "STRING_VALUE",
 * //     sourceSessionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParticipantCommandInput - {@link GetParticipantCommandInput}
 * @returns {@link GetParticipantCommandOutput}
 * @see {@link GetParticipantCommandInput} for command's `input` shape.
 * @see {@link GetParticipantCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetParticipantCommand extends $Command
  .classBuilder<
    GetParticipantCommandInput,
    GetParticipantCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetParticipant", {})
  .n("IVSRealTimeClient", "GetParticipantCommand")
  .f(void 0, void 0)
  .ser(se_GetParticipantCommand)
  .de(de_GetParticipantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParticipantRequest;
      output: GetParticipantResponse;
    };
    sdk: {
      input: GetParticipantCommandInput;
      output: GetParticipantCommandOutput;
    };
  };
}
