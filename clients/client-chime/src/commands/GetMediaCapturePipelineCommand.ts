// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMediaCapturePipelineRequest,
  GetMediaCapturePipelineResponse,
  GetMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMediaCapturePipelineCommand, se_GetMediaCapturePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandInput extends GetMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandOutput extends GetMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Gets an existing media capture pipeline.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version,
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaCapturePipeline.html">GetMediaCapturePipeline</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by GetMediaCapturePipeline in the Amazon Chime SDK Media Pipelines Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = { // GetMediaCapturePipelineRequest
 *   MediaPipelineId: "STRING_VALUE", // required
 * };
 * const command = new GetMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaCapturePipelineResponse
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
 * @param GetMediaCapturePipelineCommandInput - {@link GetMediaCapturePipelineCommandInput}
 * @returns {@link GetMediaCapturePipelineCommandOutput}
 * @see {@link GetMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link GetMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
export class GetMediaCapturePipelineCommand extends $Command
  .classBuilder<
    GetMediaCapturePipelineCommandInput,
    GetMediaCapturePipelineCommandOutput,
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
  .s("UCBuzzConsoleService", "GetMediaCapturePipeline", {})
  .n("ChimeClient", "GetMediaCapturePipelineCommand")
  .f(void 0, GetMediaCapturePipelineResponseFilterSensitiveLog)
  .ser(se_GetMediaCapturePipelineCommand)
  .de(de_GetMediaCapturePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaCapturePipelineRequest;
      output: GetMediaCapturePipelineResponse;
    };
    sdk: {
      input: GetMediaCapturePipelineCommandInput;
      output: GetMediaCapturePipelineCommandOutput;
    };
  };
}
