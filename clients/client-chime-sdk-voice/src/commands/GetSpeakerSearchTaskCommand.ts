// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSpeakerSearchTaskRequest, GetSpeakerSearchTaskResponse } from "../models/models_0";
import { GetSpeakerSearchTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpeakerSearchTaskCommand}.
 */
export interface GetSpeakerSearchTaskCommandInput extends GetSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetSpeakerSearchTaskCommand}.
 */
export interface GetSpeakerSearchTaskCommandOutput extends GetSpeakerSearchTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified speaker search task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSpeakerSearchTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetSpeakerSearchTaskResponse
 * //   SpeakerSearchTask: { // SpeakerSearchTask
 * //     SpeakerSearchTaskId: "STRING_VALUE",
 * //     SpeakerSearchTaskStatus: "STRING_VALUE",
 * //     CallDetails: { // CallDetails
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       TransactionId: "STRING_VALUE",
 * //       IsCaller: true || false,
 * //     },
 * //     SpeakerSearchDetails: { // SpeakerSearchDetails
 * //       Results: [ // SpeakerSearchResultList
 * //         { // SpeakerSearchResult
 * //           ConfidenceScore: Number("float"),
 * //           VoiceProfileId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VoiceprintGenerationStatus: "STRING_VALUE",
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     StartedTimestamp: new Date("TIMESTAMP"),
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpeakerSearchTaskCommandInput - {@link GetSpeakerSearchTaskCommandInput}
 * @returns {@link GetSpeakerSearchTaskCommandOutput}
 * @see {@link GetSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link GetSpeakerSearchTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class GetSpeakerSearchTaskCommand extends $Command
  .classBuilder<
    GetSpeakerSearchTaskCommandInput,
    GetSpeakerSearchTaskCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetSpeakerSearchTask", {})
  .n("ChimeSDKVoiceClient", "GetSpeakerSearchTaskCommand")
  .sc(GetSpeakerSearchTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpeakerSearchTaskRequest;
      output: GetSpeakerSearchTaskResponse;
    };
    sdk: {
      input: GetSpeakerSearchTaskCommandInput;
      output: GetSpeakerSearchTaskCommandOutput;
    };
  };
}
