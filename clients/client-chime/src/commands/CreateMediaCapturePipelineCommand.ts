// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMediaCapturePipelineRequest,
  CreateMediaCapturePipelineRequestFilterSensitiveLog,
  CreateMediaCapturePipelineResponse,
  CreateMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMediaCapturePipelineCommand, se_CreateMediaCapturePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a media capture pipeline.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaCapturePipeline">CreateMediaCapturePipeline</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by CreateMediaCapturePipeline in the Amazon Chime SDK Media Pipelines Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = { // CreateMediaCapturePipelineRequest
 *   SourceType: "ChimeSdkMeeting", // required
 *   SourceArn: "STRING_VALUE", // required
 *   SinkType: "S3Bucket", // required
 *   SinkArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 *     SourceConfiguration: { // SourceConfiguration
 *       SelectedVideoStreams: { // SelectedVideoStreams
 *         AttendeeIds: [ // AttendeeIdList
 *           "STRING_VALUE",
 *         ],
 *         ExternalUserIds: [ // ExternalUserIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     ArtifactsConfiguration: { // ArtifactsConfiguration
 *       Audio: { // AudioArtifactsConfiguration
 *         MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo", // required
 *       },
 *       Video: { // VideoArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "VideoOnly",
 *       },
 *       Content: { // ContentArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "ContentOnly",
 *       },
 *     },
 *   },
 * };
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaCapturePipelineResponse
 * //   MediaCapturePipeline: { // MediaCapturePipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     SourceType: "ChimeSdkMeeting",
 * //     SourceArn: "STRING_VALUE",
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     SinkType: "S3Bucket",
 * //     SinkArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 * //       SourceConfiguration: { // SourceConfiguration
 * //         SelectedVideoStreams: { // SelectedVideoStreams
 * //           AttendeeIds: [ // AttendeeIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           ExternalUserIds: [ // ExternalUserIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ArtifactsConfiguration: { // ArtifactsConfiguration
 * //         Audio: { // AudioArtifactsConfiguration
 * //           MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo", // required
 * //         },
 * //         Video: { // VideoArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "VideoOnly",
 * //         },
 * //         Content: { // ContentArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "ContentOnly",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaCapturePipelineCommandInput - {@link CreateMediaCapturePipelineCommandInput}
 * @returns {@link CreateMediaCapturePipelineCommandOutput}
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class CreateMediaCapturePipelineCommand extends $Command
  .classBuilder<
    CreateMediaCapturePipelineCommandInput,
    CreateMediaCapturePipelineCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "CreateMediaCapturePipeline", {})
  .n("ChimeClient", "CreateMediaCapturePipelineCommand")
  .f(CreateMediaCapturePipelineRequestFilterSensitiveLog, CreateMediaCapturePipelineResponseFilterSensitiveLog)
  .ser(se_CreateMediaCapturePipelineCommand)
  .de(de_CreateMediaCapturePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMediaCapturePipelineRequest;
      output: CreateMediaCapturePipelineResponse;
    };
    sdk: {
      input: CreateMediaCapturePipelineCommandInput;
      output: CreateMediaCapturePipelineCommandOutput;
    };
  };
}
