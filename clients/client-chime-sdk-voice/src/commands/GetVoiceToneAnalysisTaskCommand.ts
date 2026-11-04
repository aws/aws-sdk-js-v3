// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceToneAnalysisTaskRequest, GetVoiceToneAnalysisTaskResponse } from "../models/models_0";
import { GetVoiceToneAnalysisTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandInput extends GetVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandOutput extends GetVoiceToneAnalysisTaskResponse, __MetadataBearer {}

/**
 * Retrieves the details of a voice tone analysis task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceToneAnalysisTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   VoiceToneAnalysisTaskId: "STRING_VALUE", // required
 *   IsCaller: true || false, // required
 * };
 * const command = new GetVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceToneAnalysisTaskResponse
 * //   VoiceToneAnalysisTask: { // VoiceToneAnalysisTask
 * //     VoiceToneAnalysisTaskId: "STRING_VALUE",
 * //     VoiceToneAnalysisTaskStatus: "STRING_VALUE",
 * //     CallDetails: { // CallDetails
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       TransactionId: "STRING_VALUE",
 * //       IsCaller: true || false,
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
 * @param GetVoiceToneAnalysisTaskCommandInput - {@link GetVoiceToneAnalysisTaskCommandInput}
 * @returns {@link GetVoiceToneAnalysisTaskCommandOutput}
 * @see {@link GetVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link GetVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class GetVoiceToneAnalysisTaskCommand extends command<GetVoiceToneAnalysisTaskCommandInput, GetVoiceToneAnalysisTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceToneAnalysisTask",
  GetVoiceToneAnalysisTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceToneAnalysisTaskRequest;
      output: GetVoiceToneAnalysisTaskResponse;
    };
    sdk: {
      input: GetVoiceToneAnalysisTaskCommandInput;
      output: GetVoiceToneAnalysisTaskCommandOutput;
    };
  };
}
