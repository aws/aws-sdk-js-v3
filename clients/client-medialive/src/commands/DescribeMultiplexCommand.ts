// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeMultiplexRequest, DescribeMultiplexResponse } from "../models/models_1";
import { DescribeMultiplex } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMultiplexCommand}.
 */
export interface DescribeMultiplexCommandInput extends DescribeMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiplexCommand}.
 */
export interface DescribeMultiplexCommandOutput extends DescribeMultiplexResponse, __MetadataBearer {}

/**
 * Gets details about a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 * };
 * const command = new DescribeMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiplexResponse
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
 * @param DescribeMultiplexCommandInput - {@link DescribeMultiplexCommandInput}
 * @returns {@link DescribeMultiplexCommandOutput}
 * @see {@link DescribeMultiplexCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexCommandOutput} for command's `response` shape.
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
export class DescribeMultiplexCommand extends $Command
  .classBuilder<
    DescribeMultiplexCommandInput,
    DescribeMultiplexCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeMultiplex", {})
  .n("MediaLiveClient", "DescribeMultiplexCommand")
  .sc(DescribeMultiplex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiplexRequest;
      output: DescribeMultiplexResponse;
    };
    sdk: {
      input: DescribeMultiplexCommandInput;
      output: DescribeMultiplexCommandOutput;
    };
  };
}
