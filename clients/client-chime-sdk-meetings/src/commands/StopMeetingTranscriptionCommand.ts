// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMeetingsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMeetingsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopMeetingTranscriptionRequest } from "../models/models_0";
import { StopMeetingTranscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMeetingTranscriptionCommand}.
 */
export interface StopMeetingTranscriptionCommandInput extends StopMeetingTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StopMeetingTranscriptionCommand}.
 */
export interface StopMeetingTranscriptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html">
 *             Using Amazon Chime SDK live transcription
 *         </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <important>
 *             <p>By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as
 *                     further described in section 50 of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a>. Using Amazon Transcribe
 *                     may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users’
 *                     responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication
 *                     that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and
 *                     improve Amazon Web Services AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, StopMeetingTranscriptionCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, StopMeetingTranscriptionCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // StopMeetingTranscriptionRequest
 *   MeetingId: "STRING_VALUE", // required
 * };
 * const command = new StopMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopMeetingTranscriptionCommandInput - {@link StopMeetingTranscriptionCommandInput}
 * @returns {@link StopMeetingTranscriptionCommandOutput}
 * @see {@link StopMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StopMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The user isn't authorized to request a resource.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 *
 * @public
 */
export class StopMeetingTranscriptionCommand extends $Command
  .classBuilder<
    StopMeetingTranscriptionCommandInput,
    StopMeetingTranscriptionCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMeetingsSDKService", "StopMeetingTranscription", {})
  .n("ChimeSDKMeetingsClient", "StopMeetingTranscriptionCommand")
  .sc(StopMeetingTranscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMeetingTranscriptionRequest;
      output: {};
    };
    sdk: {
      input: StopMeetingTranscriptionCommandInput;
      output: StopMeetingTranscriptionCommandOutput;
    };
  };
}
