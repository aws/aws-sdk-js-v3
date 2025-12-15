// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { UpdateMultiplexRequest, UpdateMultiplexResponse } from "../models/models_1";
import { UpdateMultiplex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMultiplexCommand}.
 */
export interface UpdateMultiplexCommandInput extends UpdateMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMultiplexCommand}.
 */
export interface UpdateMultiplexCommandOutput extends UpdateMultiplexResponse, __MetadataBearer {}

/**
 * Updates a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   MultiplexSettings: { // MultiplexSettings
 *     MaximumVideoBufferDelayMilliseconds: Number("int"),
 *     TransportStreamBitrate: Number("int"), // required
 *     TransportStreamId: Number("int"), // required
 *     TransportStreamReservedBitrate: Number("int"),
 *   },
 *   Name: "STRING_VALUE",
 *   PacketIdentifiersMapping: { // MultiplexPacketIdentifiersMapping
 *     "<keys>": { // MultiplexProgramPacketIdentifiersMap
 *       AudioPids: [ // __listOf__integer
 *         Number("int"),
 *       ],
 *       DvbSubPids: [
 *         Number("int"),
 *       ],
 *       DvbTeletextPid: Number("int"),
 *       EtvPlatformPid: Number("int"),
 *       EtvSignalPid: Number("int"),
 *       KlvDataPids: [
 *         Number("int"),
 *       ],
 *       PcrPid: Number("int"),
 *       PmtPid: Number("int"),
 *       PrivateMetadataPid: Number("int"),
 *       Scte27Pids: [
 *         Number("int"),
 *       ],
 *       Scte35Pid: Number("int"),
 *       TimedMetadataPid: Number("int"),
 *       VideoPid: Number("int"),
 *       AribCaptionsPid: Number("int"),
 *       DvbTeletextPids: [
 *         Number("int"),
 *       ],
 *       EcmPid: Number("int"),
 *       Smpte2038Pid: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMultiplexResponse
 * //   Multiplex: { // Multiplex
 * //     Arn: "STRING_VALUE",
 * //     AvailabilityZones: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Destinations: [ // __listOfMultiplexOutputDestination
 * //       { // MultiplexOutputDestination
 * //         MediaConnectSettings: { // MultiplexMediaConnectOutputDestinationSettings
 * //           EntitlementArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     MultiplexSettings: { // MultiplexSettings
 * //       MaximumVideoBufferDelayMilliseconds: Number("int"),
 * //       TransportStreamBitrate: Number("int"), // required
 * //       TransportStreamId: Number("int"), // required
 * //       TransportStreamReservedBitrate: Number("int"),
 * //     },
 * //     Name: "STRING_VALUE",
 * //     PipelinesRunningCount: Number("int"),
 * //     ProgramCount: Number("int"),
 * //     State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMultiplexCommandInput - {@link UpdateMultiplexCommandInput}
 * @returns {@link UpdateMultiplexCommandOutput}
 * @see {@link UpdateMultiplexCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexCommandOutput} for command's `response` shape.
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
export class UpdateMultiplexCommand extends $Command
  .classBuilder<
    UpdateMultiplexCommandInput,
    UpdateMultiplexCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateMultiplex", {})
  .n("MediaLiveClient", "UpdateMultiplexCommand")
  .sc(UpdateMultiplex$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMultiplexRequest;
      output: UpdateMultiplexResponse;
    };
    sdk: {
      input: UpdateMultiplexCommandInput;
      output: UpdateMultiplexCommandOutput;
    };
  };
}
