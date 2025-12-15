// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { CreateMultiplexRequest, CreateMultiplexResponse } from "../models/models_1";
import { CreateMultiplex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMultiplexCommand}.
 */
export interface CreateMultiplexCommandInput extends CreateMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultiplexCommand}.
 */
export interface CreateMultiplexCommandOutput extends CreateMultiplexResponse, __MetadataBearer {}

/**
 * Create a new multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateMultiplexRequest
 *   AvailabilityZones: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   MultiplexSettings: { // MultiplexSettings
 *     MaximumVideoBufferDelayMilliseconds: Number("int"),
 *     TransportStreamBitrate: Number("int"), // required
 *     TransportStreamId: Number("int"), // required
 *     TransportStreamReservedBitrate: Number("int"),
 *   },
 *   Name: "STRING_VALUE", // required
 *   RequestId: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultiplexResponse
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
 * @param CreateMultiplexCommandInput - {@link CreateMultiplexCommandInput}
 * @returns {@link CreateMultiplexCommandOutput}
 * @see {@link CreateMultiplexCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
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
export class CreateMultiplexCommand extends $Command
  .classBuilder<
    CreateMultiplexCommandInput,
    CreateMultiplexCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreateMultiplex", {})
  .n("MediaLiveClient", "CreateMultiplexCommand")
  .sc(CreateMultiplex$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultiplexRequest;
      output: CreateMultiplexResponse;
    };
    sdk: {
      input: CreateMultiplexCommandInput;
      output: CreateMultiplexCommandOutput;
    };
  };
}
