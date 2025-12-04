// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { UpdateMultiplexProgramRequest, UpdateMultiplexProgramResponse } from "../models/models_1";
import { UpdateMultiplexProgram } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMultiplexProgramCommand}.
 */
export interface UpdateMultiplexProgramCommandInput extends UpdateMultiplexProgramRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMultiplexProgramCommand}.
 */
export interface UpdateMultiplexProgramCommandOutput extends UpdateMultiplexProgramResponse, __MetadataBearer {}

/**
 * Update a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateMultiplexProgramRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   MultiplexProgramSettings: { // MultiplexProgramSettings
 *     PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 *     ProgramNumber: Number("int"), // required
 *     ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 *       ProviderName: "STRING_VALUE", // required
 *       ServiceName: "STRING_VALUE", // required
 *     },
 *     VideoSettings: { // MultiplexVideoSettings
 *       ConstantBitrate: Number("int"),
 *       StatmuxSettings: { // MultiplexStatmuxVideoSettings
 *         MaximumBitrate: Number("int"),
 *         MinimumBitrate: Number("int"),
 *         Priority: Number("int"),
 *       },
 *     },
 *   },
 *   ProgramName: "STRING_VALUE", // required
 * };
 * const command = new UpdateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMultiplexProgramResponse
 * //   MultiplexProgram: { // MultiplexProgram
 * //     ChannelId: "STRING_VALUE",
 * //     MultiplexProgramSettings: { // MultiplexProgramSettings
 * //       PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 * //       ProgramNumber: Number("int"), // required
 * //       ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 * //         ProviderName: "STRING_VALUE", // required
 * //         ServiceName: "STRING_VALUE", // required
 * //       },
 * //       VideoSettings: { // MultiplexVideoSettings
 * //         ConstantBitrate: Number("int"),
 * //         StatmuxSettings: { // MultiplexStatmuxVideoSettings
 * //           MaximumBitrate: Number("int"),
 * //           MinimumBitrate: Number("int"),
 * //           Priority: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     PacketIdentifiersMap: { // MultiplexProgramPacketIdentifiersMap
 * //       AudioPids: [ // __listOf__integer
 * //         Number("int"),
 * //       ],
 * //       DvbSubPids: [
 * //         Number("int"),
 * //       ],
 * //       DvbTeletextPid: Number("int"),
 * //       EtvPlatformPid: Number("int"),
 * //       EtvSignalPid: Number("int"),
 * //       KlvDataPids: [
 * //         Number("int"),
 * //       ],
 * //       PcrPid: Number("int"),
 * //       PmtPid: Number("int"),
 * //       PrivateMetadataPid: Number("int"),
 * //       Scte27Pids: [
 * //         Number("int"),
 * //       ],
 * //       Scte35Pid: Number("int"),
 * //       TimedMetadataPid: Number("int"),
 * //       VideoPid: Number("int"),
 * //       AribCaptionsPid: Number("int"),
 * //       DvbTeletextPids: [
 * //         Number("int"),
 * //       ],
 * //       EcmPid: Number("int"),
 * //       Smpte2038Pid: Number("int"),
 * //     },
 * //     PipelineDetails: [ // __listOfMultiplexProgramPipelineDetail
 * //       { // MultiplexProgramPipelineDetail
 * //         ActiveChannelPipeline: "STRING_VALUE",
 * //         PipelineId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ProgramName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMultiplexProgramCommandInput - {@link UpdateMultiplexProgramCommandInput}
 * @returns {@link UpdateMultiplexProgramCommandOutput}
 * @see {@link UpdateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateMultiplexProgramCommand extends $Command
  .classBuilder<
    UpdateMultiplexProgramCommandInput,
    UpdateMultiplexProgramCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateMultiplexProgram", {})
  .n("MediaLiveClient", "UpdateMultiplexProgramCommand")
  .sc(UpdateMultiplexProgram)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMultiplexProgramRequest;
      output: UpdateMultiplexProgramResponse;
    };
    sdk: {
      input: UpdateMultiplexProgramCommandInput;
      output: UpdateMultiplexProgramCommandOutput;
    };
  };
}
