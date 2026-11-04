// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartVoiceToneAnalysisTaskRequest, StartVoiceToneAnalysisTaskResponse } from "../models/models_0";
import { StartVoiceToneAnalysisTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartVoiceToneAnalysisTaskCommand}.
 */
export interface StartVoiceToneAnalysisTaskCommandInput extends StartVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartVoiceToneAnalysisTaskCommand}.
 */
export interface StartVoiceToneAnalysisTaskCommandOutput extends StartVoiceToneAnalysisTaskResponse, __MetadataBearer {}

/**
 * Starts a voice tone analysis task. For more information about voice tone analysis, see [Using Amazon Chime SDK voice analytics](https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html) in the *Amazon Chime SDK Developer Guide*.
 *
 * > **Important:** Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the [AWS service terms](https://aws.amazon.com/service-terms/) for the Amazon Chime SDK.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StartVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StartVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // StartVoiceToneAnalysisTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   LanguageCode: "en-US", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartVoiceToneAnalysisTaskResponse
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
 * @param StartVoiceToneAnalysisTaskCommandInput - {@link StartVoiceToneAnalysisTaskCommandInput}
 * @returns {@link StartVoiceToneAnalysisTaskCommandOutput}
 * @see {@link StartVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link StartVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link GoneException} (client fault)
 *
 * Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *
 * A well-formed request couldn't be followed due to semantic errors.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class StartVoiceToneAnalysisTaskCommand extends command<StartVoiceToneAnalysisTaskCommandInput, StartVoiceToneAnalysisTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartVoiceToneAnalysisTask",
  StartVoiceToneAnalysisTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVoiceToneAnalysisTaskRequest;
      output: StartVoiceToneAnalysisTaskResponse;
    };
    sdk: {
      input: StartVoiceToneAnalysisTaskCommandInput;
      output: StartVoiceToneAnalysisTaskCommandOutput;
    };
  };
}
