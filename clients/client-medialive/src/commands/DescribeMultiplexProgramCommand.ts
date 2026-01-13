// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { DescribeMultiplexProgramRequest, DescribeMultiplexProgramResponse } from "../models/models_1";
import { DescribeMultiplexProgram$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMultiplexProgramCommand}.
 */
export interface DescribeMultiplexProgramCommandInput extends DescribeMultiplexProgramRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiplexProgramCommand}.
 */
export interface DescribeMultiplexProgramCommandOutput extends DescribeMultiplexProgramResponse, __MetadataBearer {}

/**
 * Get the details for a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeMultiplexProgramRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   ProgramName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiplexProgramResponse
 * //   ChannelId: "STRING_VALUE",
 * //   MultiplexProgramSettings: { // MultiplexProgramSettings
 * //     PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 * //     ProgramNumber: Number("int"), // required
 * //     ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 * //       ProviderName: "STRING_VALUE", // required
 * //       ServiceName: "STRING_VALUE", // required
 * //     },
 * //     VideoSettings: { // MultiplexVideoSettings
 * //       ConstantBitrate: Number("int"),
 * //       StatmuxSettings: { // MultiplexStatmuxVideoSettings
 * //         MaximumBitrate: Number("int"),
 * //         MinimumBitrate: Number("int"),
 * //         Priority: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   PacketIdentifiersMap: { // MultiplexProgramPacketIdentifiersMap
 * //     AudioPids: [ // __listOf__integer
 * //       Number("int"),
 * //     ],
 * //     DvbSubPids: [
 * //       Number("int"),
 * //     ],
 * //     DvbTeletextPid: Number("int"),
 * //     EtvPlatformPid: Number("int"),
 * //     EtvSignalPid: Number("int"),
 * //     KlvDataPids: [
 * //       Number("int"),
 * //     ],
 * //     PcrPid: Number("int"),
 * //     PmtPid: Number("int"),
 * //     PrivateMetadataPid: Number("int"),
 * //     Scte27Pids: [
 * //       Number("int"),
 * //     ],
 * //     Scte35Pid: Number("int"),
 * //     TimedMetadataPid: Number("int"),
 * //     VideoPid: Number("int"),
 * //     AribCaptionsPid: Number("int"),
 * //     DvbTeletextPids: [
 * //       Number("int"),
 * //     ],
 * //     EcmPid: Number("int"),
 * //     Smpte2038Pid: Number("int"),
 * //   },
 * //   PipelineDetails: [ // __listOfMultiplexProgramPipelineDetail
 * //     { // MultiplexProgramPipelineDetail
 * //       ActiveChannelPipeline: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProgramName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMultiplexProgramCommandInput - {@link DescribeMultiplexProgramCommandInput}
 * @returns {@link DescribeMultiplexProgramCommandOutput}
 * @see {@link DescribeMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class DescribeMultiplexProgramCommand extends $Command
  .classBuilder<
    DescribeMultiplexProgramCommandInput,
    DescribeMultiplexProgramCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeMultiplexProgram", {})
  .n("MediaLiveClient", "DescribeMultiplexProgramCommand")
  .sc(DescribeMultiplexProgram$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiplexProgramRequest;
      output: DescribeMultiplexProgramResponse;
    };
    sdk: {
      input: DescribeMultiplexProgramCommandInput;
      output: DescribeMultiplexProgramCommandOutput;
    };
  };
}
