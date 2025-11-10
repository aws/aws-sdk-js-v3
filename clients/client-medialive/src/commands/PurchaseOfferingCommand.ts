// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_2";
import { PurchaseOffering } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResponse, __MetadataBearer {}

/**
 * Purchase an offering and create a reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, PurchaseOfferingCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, PurchaseOfferingCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // PurchaseOfferingRequest
 *   Count: Number("int"), // required
 *   Name: "STRING_VALUE",
 *   OfferingId: "STRING_VALUE", // required
 *   RenewalSettings: { // RenewalSettings
 *     AutomaticRenewal: "DISABLED" || "ENABLED" || "UNAVAILABLE",
 *     RenewalCount: Number("int"),
 *   },
 *   RequestId: "STRING_VALUE",
 *   Start: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseOfferingResponse
 * //   Reservation: { // Reservation
 * //     Arn: "STRING_VALUE",
 * //     Count: Number("int"),
 * //     CurrencyCode: "STRING_VALUE",
 * //     Duration: Number("int"),
 * //     DurationUnits: "MONTHS",
 * //     End: "STRING_VALUE",
 * //     FixedPrice: Number("double"),
 * //     Name: "STRING_VALUE",
 * //     OfferingDescription: "STRING_VALUE",
 * //     OfferingId: "STRING_VALUE",
 * //     OfferingType: "NO_UPFRONT",
 * //     Region: "STRING_VALUE",
 * //     RenewalSettings: { // RenewalSettings
 * //       AutomaticRenewal: "DISABLED" || "ENABLED" || "UNAVAILABLE",
 * //       RenewalCount: Number("int"),
 * //     },
 * //     ReservationId: "STRING_VALUE",
 * //     ResourceSpecification: { // ReservationResourceSpecification
 * //       ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //       Codec: "MPEG2" || "AVC" || "HEVC" || "AUDIO" || "LINK" || "AV1",
 * //       MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //       MaximumFramerate: "MAX_30_FPS" || "MAX_60_FPS",
 * //       Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //       ResourceType: "INPUT" || "OUTPUT" || "MULTIPLEX" || "CHANNEL",
 * //       SpecialFeature: "ADVANCED_AUDIO" || "AUDIO_NORMALIZATION" || "MGHD" || "MGUHD",
 * //       VideoQuality: "STANDARD" || "ENHANCED" || "PREMIUM",
 * //     },
 * //     Start: "STRING_VALUE",
 * //     State: "ACTIVE" || "EXPIRED" || "CANCELED" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     UsagePrice: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseOfferingCommandInput - {@link PurchaseOfferingCommandInput}
 * @returns {@link PurchaseOfferingCommandOutput}
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
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
export class PurchaseOfferingCommand extends $Command
  .classBuilder<
    PurchaseOfferingCommandInput,
    PurchaseOfferingCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "PurchaseOffering", {})
  .n("MediaLiveClient", "PurchaseOfferingCommand")
  .sc(PurchaseOffering)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseOfferingRequest;
      output: PurchaseOfferingResponse;
    };
    sdk: {
      input: PurchaseOfferingCommandInput;
      output: PurchaseOfferingCommandOutput;
    };
  };
}
