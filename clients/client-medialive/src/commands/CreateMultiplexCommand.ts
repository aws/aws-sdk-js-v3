// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateMultiplexRequest, CreateMultiplexResponse } from "../models/models_2";
import { de_CreateMultiplexCommand, se_CreateMultiplexCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "CreateMultiplex", {})
  .n("MediaLiveClient", "CreateMultiplexCommand")
  .f(void 0, void 0)
  .ser(se_CreateMultiplexCommand)
  .de(de_CreateMultiplexCommand)
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
