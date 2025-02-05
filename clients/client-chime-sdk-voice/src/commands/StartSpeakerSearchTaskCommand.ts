// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSpeakerSearchTaskRequest, StartSpeakerSearchTaskResponse } from "../models/models_0";
import { de_StartSpeakerSearchTaskCommand, se_StartSpeakerSearchTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a speaker search task.</p>
 *          <important>
 *             <p>Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StartSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StartSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @throws {@link GoneException} (client fault)
 *  <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>A well-formed request couldn't be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 * @public
 */
export class StartSpeakerSearchTaskCommand extends $Command
  .classBuilder<
    StartSpeakerSearchTaskCommandInput,
    StartSpeakerSearchTaskCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "StartSpeakerSearchTask", {})
  .n("ChimeSDKVoiceClient", "StartSpeakerSearchTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartSpeakerSearchTaskCommand)
  .de(de_StartSpeakerSearchTaskCommand)
  .build() {
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
