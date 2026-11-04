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
 * Starts a voice tone analysis task. For more information about voice tone analysis, see [Using Amazon Chime SDK voice analytics](https://docs.aws.amazon.com/chime-sdk/latest/dg/voice-analytics.html) in the *Amazon Chime SDK Developer Guide*.
 *
 * > **Important:** Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the [AWS service terms](https://aws.amazon.com/service-terms/) for the Amazon Chime SDK.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, StartVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, StartVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMediaPipelines service.
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
