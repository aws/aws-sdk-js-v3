// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListReservationsRequest, ListReservationsResponse } from "../models/models_2";
import { ListReservations } from "../schemas/schemas_11_Reservation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandInput extends ListReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandOutput extends ListReservationsResponse, __MetadataBearer {}

/**
 * List purchased reservations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListReservationsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListReservationsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListReservationsRequest
 *   ChannelClass: "STRING_VALUE",
 *   Codec: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MaximumBitrate: "STRING_VALUE",
 *   MaximumFramerate: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Resolution: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   SpecialFeature: "STRING_VALUE",
 *   VideoQuality: "STRING_VALUE",
 * };
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListReservationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Reservations: [ // __listOfReservation
 * //     { // Reservation
 * //       Arn: "STRING_VALUE",
 * //       Count: Number("int"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       DurationUnits: "MONTHS",
 * //       End: "STRING_VALUE",
 * //       FixedPrice: Number("double"),
 * //       Name: "STRING_VALUE",
 * //       OfferingDescription: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       OfferingType: "NO_UPFRONT",
 * //       Region: "STRING_VALUE",
 * //       RenewalSettings: { // RenewalSettings
 * //         AutomaticRenewal: "DISABLED" || "ENABLED" || "UNAVAILABLE",
 * //         RenewalCount: Number("int"),
 * //       },
 * //       ReservationId: "STRING_VALUE",
 * //       ResourceSpecification: { // ReservationResourceSpecification
 * //         ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //         Codec: "MPEG2" || "AVC" || "HEVC" || "AUDIO" || "LINK" || "AV1",
 * //         MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //         MaximumFramerate: "MAX_30_FPS" || "MAX_60_FPS",
 * //         Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //         ResourceType: "INPUT" || "OUTPUT" || "MULTIPLEX" || "CHANNEL",
 * //         SpecialFeature: "ADVANCED_AUDIO" || "AUDIO_NORMALIZATION" || "MGHD" || "MGUHD",
 * //         VideoQuality: "STANDARD" || "ENHANCED" || "PREMIUM",
 * //       },
 * //       Start: "STRING_VALUE",
 * //       State: "ACTIVE" || "EXPIRED" || "CANCELED" || "DELETED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       UsagePrice: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReservationsCommandInput - {@link ListReservationsCommandInput}
 * @returns {@link ListReservationsCommandOutput}
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListReservationsCommand extends $Command
  .classBuilder<
    ListReservationsCommandInput,
    ListReservationsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListReservations", {})
  .n("MediaLiveClient", "ListReservationsCommand")
  .sc(ListReservations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReservationsRequest;
      output: ListReservationsResponse;
    };
    sdk: {
      input: ListReservationsCommandInput;
      output: ListReservationsCommandOutput;
    };
  };
}
