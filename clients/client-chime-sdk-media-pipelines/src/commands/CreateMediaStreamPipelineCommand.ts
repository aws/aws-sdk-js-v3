// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMediaStreamPipelineRequest, CreateMediaStreamPipelineResponse } from "../models/models_0";
import { CreateMediaStreamPipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaStreamPipelineCommand}.
 */
export interface CreateMediaStreamPipelineCommandInput extends CreateMediaStreamPipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaStreamPipelineCommand}.
 */
export interface CreateMediaStreamPipelineCommandOutput extends CreateMediaStreamPipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a streaming media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaStreamPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaStreamPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaStreamPipelineRequest
 *   Sources: [ // MediaStreamSourceList // required
 *     { // MediaStreamSource
 *       SourceType: "ChimeSdkMeeting", // required
 *       SourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Sinks: [ // MediaStreamSinkList // required
 *     { // MediaStreamSink
 *       SinkArn: "STRING_VALUE", // required
 *       SinkType: "KinesisVideoStreamPool", // required
 *       ReservedStreamCapacity: Number("int"), // required
 *       MediaStreamType: "MixedAudio" || "IndividualAudio", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaStreamPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaStreamPipelineResponse
 * //   MediaStreamPipeline: { // MediaStreamPipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     MediaPipelineArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused" || "NotStarted",
 * //     Sources: [ // MediaStreamSourceList
 * //       { // MediaStreamSource
 * //         SourceType: "ChimeSdkMeeting", // required
 * //         SourceArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Sinks: [ // MediaStreamSinkList
 * //       { // MediaStreamSink
 * //         SinkArn: "STRING_VALUE", // required
 * //         SinkType: "KinesisVideoStreamPool", // required
 * //         ReservedStreamCapacity: Number("int"), // required
 * //         MediaStreamType: "MixedAudio" || "IndividualAudio", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaStreamPipelineCommandInput - {@link CreateMediaStreamPipelineCommandInput}
 * @returns {@link CreateMediaStreamPipelineCommandOutput}
 * @see {@link CreateMediaStreamPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaStreamPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
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
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class CreateMediaStreamPipelineCommand extends $Command
  .classBuilder<
    CreateMediaStreamPipelineCommandInput,
    CreateMediaStreamPipelineCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "CreateMediaStreamPipeline", {})
  .n("ChimeSDKMediaPipelinesClient", "CreateMediaStreamPipelineCommand")
  .sc(CreateMediaStreamPipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMediaStreamPipelineRequest;
      output: CreateMediaStreamPipelineResponse;
    };
    sdk: {
      input: CreateMediaStreamPipelineCommandInput;
      output: CreateMediaStreamPipelineCommandOutput;
    };
  };
}
