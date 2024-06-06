// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexRequest, DeleteMultiplexResponse } from "../models/models_2";
import { de_DeleteMultiplexCommand, se_DeleteMultiplexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMultiplexCommand}.
 */
export interface DeleteMultiplexCommandInput extends DeleteMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiplexCommand}.
 */
export interface DeleteMultiplexCommandOutput extends DeleteMultiplexResponse, __MetadataBearer {}

/**
 * Delete a multiplex. The multiplex must be idle.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiplexResponse
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
 * @param DeleteMultiplexCommandInput - {@link DeleteMultiplexCommandInput}
 * @returns {@link DeleteMultiplexCommandOutput}
 * @see {@link DeleteMultiplexCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteMultiplexCommand extends $Command
  .classBuilder<
    DeleteMultiplexCommandInput,
    DeleteMultiplexCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "DeleteMultiplex", {})
  .n("MediaLiveClient", "DeleteMultiplexCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMultiplexCommand)
  .de(de_DeleteMultiplexCommand)
  .build() {}
