// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopSpeakerSearchTaskRequest } from "../models/models_0";
import { StopSpeakerSearchTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopSpeakerSearchTaskCommand}.
 */
export interface StopSpeakerSearchTaskCommandInput extends StopSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link StopSpeakerSearchTaskCommand}.
 */
export interface StopSpeakerSearchTaskCommandOutput extends __MetadataBearer {}

/**
 * Stops a speaker search task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StopSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StopSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // StopSpeakerSearchTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new StopSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSpeakerSearchTaskCommandInput - {@link StopSpeakerSearchTaskCommandInput}
 * @returns {@link StopSpeakerSearchTaskCommandOutput}
 * @see {@link StopSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link StopSpeakerSearchTaskCommandOutput} for command's `response` shape.
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
export class StopSpeakerSearchTaskCommand extends command<StopSpeakerSearchTaskCommandInput, StopSpeakerSearchTaskCommandOutput>(
  _ep0,
  _mw0,
  "StopSpeakerSearchTask",
  StopSpeakerSearchTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSpeakerSearchTaskRequest;
      output: {};
    };
    sdk: {
      input: StopSpeakerSearchTaskCommandInput;
      output: StopSpeakerSearchTaskCommandOutput;
    };
  };
}
