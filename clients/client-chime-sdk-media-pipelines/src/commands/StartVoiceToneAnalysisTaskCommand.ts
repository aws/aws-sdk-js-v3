// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartVoiceToneAnalysisTaskRequest,
  StartVoiceToneAnalysisTaskRequestFilterSensitiveLog,
  StartVoiceToneAnalysisTaskResponse,
} from "../models/models_0";
import { de_StartVoiceToneAnalysisTaskCommand, se_StartVoiceToneAnalysisTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a voice tone analysis task. For more information about voice tone analysis, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/voice-analytics.html">Using Amazon Chime SDK voice analytics</a>
 *          in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <important>
 *             <p>Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, StartVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, StartVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // StartVoiceToneAnalysisTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   LanguageCode: "en-US", // required
 *   KinesisVideoStreamSourceTaskConfiguration: { // KinesisVideoStreamSourceTaskConfiguration
 *     StreamArn: "STRING_VALUE", // required
 *     ChannelId: Number("int"), // required
 *     FragmentNumber: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartVoiceToneAnalysisTaskResponse
 * //   VoiceToneAnalysisTask: { // VoiceToneAnalysisTask
 * //     VoiceToneAnalysisTaskId: "STRING_VALUE",
 * //     VoiceToneAnalysisTaskStatus: "NotStarted" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartVoiceToneAnalysisTaskCommandInput - {@link StartVoiceToneAnalysisTaskCommandInput}
 * @returns {@link StartVoiceToneAnalysisTaskCommandOutput}
 * @see {@link StartVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link StartVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class StartVoiceToneAnalysisTaskCommand extends $Command
  .classBuilder<
    StartVoiceToneAnalysisTaskCommandInput,
    StartVoiceToneAnalysisTaskCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "StartVoiceToneAnalysisTask", {})
  .n("ChimeSDKMediaPipelinesClient", "StartVoiceToneAnalysisTaskCommand")
  .f(StartVoiceToneAnalysisTaskRequestFilterSensitiveLog, void 0)
  .ser(se_StartVoiceToneAnalysisTaskCommand)
  .de(de_StartVoiceToneAnalysisTaskCommand)
  .build() {
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
