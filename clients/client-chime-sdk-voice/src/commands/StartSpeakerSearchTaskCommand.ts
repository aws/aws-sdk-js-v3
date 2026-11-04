// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSpeakerSearchTaskRequest, StartSpeakerSearchTaskResponse } from "../models/models_0";
import { StartSpeakerSearchTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSpeakerSearchTaskCommand}.
 */
export interface StartSpeakerSearchTaskCommandInput extends StartSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartSpeakerSearchTaskCommand}.
 */
export interface StartSpeakerSearchTaskCommandOutput extends StartSpeakerSearchTaskResponse, __MetadataBearer {}

/**
 * Starts a speaker search task.
 *
 * > **Important:** Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the [AWS service terms](https://aws.amazon.com/service-terms/) for the Amazon Chime SDK.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StartSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StartSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // StartSpeakerSearchTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   VoiceProfileDomainId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   CallLeg: "Caller" || "Callee",
 * };
 * const command = new StartSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeakerSearchTaskResponse
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
 * @param StartSpeakerSearchTaskCommandInput - {@link StartSpeakerSearchTaskCommandInput}
 * @returns {@link StartSpeakerSearchTaskCommandOutput}
 * @see {@link StartSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeakerSearchTaskCommandOutput} for command's `response` shape.
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
export class StartSpeakerSearchTaskCommand extends command<StartSpeakerSearchTaskCommandInput, StartSpeakerSearchTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartSpeakerSearchTask",
  StartSpeakerSearchTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSpeakerSearchTaskRequest;
      output: StartSpeakerSearchTaskResponse;
    };
    sdk: {
      input: StartSpeakerSearchTaskCommandInput;
      output: StartSpeakerSearchTaskCommandOutput;
    };
  };
}
