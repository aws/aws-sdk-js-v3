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
 * import { ChimeSDKMediaPipelinesClient, StartSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, StartSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // StartSpeakerSearchTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   VoiceProfileDomainArn: "STRING_VALUE", // required
 *   KinesisVideoStreamSourceTaskConfiguration: { // KinesisVideoStreamSourceTaskConfiguration
 *     StreamArn: "STRING_VALUE", // required
 *     ChannelId: Number("int"), // required
 *     FragmentNumber: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeakerSearchTaskResponse
 * //   SpeakerSearchTask: { // SpeakerSearchTask
 * //     SpeakerSearchTaskId: "STRING_VALUE",
 * //     SpeakerSearchTaskStatus: "NotStarted" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeakerSearchTaskCommandInput - {@link StartSpeakerSearchTaskCommandInput}
 * @returns {@link StartSpeakerSearchTaskCommandOutput}
 * @see {@link StartSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeakerSearchTaskCommandOutput} for command's `response` shape.
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
