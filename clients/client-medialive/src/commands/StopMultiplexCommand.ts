// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StopMultiplexRequest, StopMultiplexResponse } from "../models/models_2";
import { de_StopMultiplexCommand, se_StopMultiplexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMultiplexCommand}.
 */
export interface StopMultiplexCommandInput extends StopMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link StopMultiplexCommand}.
 */
export interface StopMultiplexCommandOutput extends StopMultiplexResponse, __MetadataBearer {}

/**
 * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StopMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StopMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // StopMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 * };
 * const command = new StopMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // StopMultiplexResponse
 * //   Arn: "STRING_VALUE",
 * //   AvailabilityZones: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Destinations: [ // __listOfMultiplexOutputDestination
 * //     { // MultiplexOutputDestination
 * //       MediaConnectSettings: { // MultiplexMediaConnectOutputDestinationSettings
 * //         EntitlementArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   MultiplexSettings: { // MultiplexSettings
 * //     MaximumVideoBufferDelayMilliseconds: Number("int"),
 * //     TransportStreamBitrate: Number("int"), // required
 * //     TransportStreamId: Number("int"), // required
 * //     TransportStreamReservedBitrate: Number("int"),
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PipelinesRunningCount: Number("int"),
 * //   ProgramCount: Number("int"),
 * //   State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopMultiplexCommandInput - {@link StopMultiplexCommandInput}
 * @returns {@link StopMultiplexCommandOutput}
 * @see {@link StopMultiplexCommandInput} for command's `input` shape.
 * @see {@link StopMultiplexCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class StopMultiplexCommand extends $Command
  .classBuilder<
    StopMultiplexCommandInput,
    StopMultiplexCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "StopMultiplex", {})
  .n("MediaLiveClient", "StopMultiplexCommand")
  .f(void 0, void 0)
  .ser(se_StopMultiplexCommand)
  .de(de_StopMultiplexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMultiplexRequest;
      output: StopMultiplexResponse;
    };
    sdk: {
      input: StopMultiplexCommandInput;
      output: StopMultiplexCommandOutput;
    };
  };
}
