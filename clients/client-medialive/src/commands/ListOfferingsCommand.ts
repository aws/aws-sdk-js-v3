// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { ListOfferingsRequest, ListOfferingsResponse } from "../models/models_1";
import { ListOfferings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandInput extends ListOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandOutput extends ListOfferingsResponse, __MetadataBearer {}

/**
 * List offerings available for purchase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListOfferingsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListOfferingsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListOfferingsRequest
 *   ChannelClass: "STRING_VALUE",
 *   ChannelConfiguration: "STRING_VALUE",
 *   Codec: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MaximumBitrate: "STRING_VALUE",
 *   MaximumFramerate: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Resolution: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   SpecialFeature: "STRING_VALUE",
 *   VideoQuality: "STRING_VALUE",
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Offerings: [ // __listOfOffering
 * //     { // Offering
 * //       Arn: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       DurationUnits: "MONTHS",
 * //       FixedPrice: Number("double"),
 * //       OfferingDescription: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       OfferingType: "NO_UPFRONT",
 * //       Region: "STRING_VALUE",
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
 * //       UsagePrice: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOfferingsCommandInput - {@link ListOfferingsCommandInput}
 * @returns {@link ListOfferingsCommandOutput}
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
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
export class ListOfferingsCommand extends $Command
  .classBuilder<
    ListOfferingsCommandInput,
    ListOfferingsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListOfferings", {})
  .n("MediaLiveClient", "ListOfferingsCommand")
  .sc(ListOfferings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOfferingsRequest;
      output: ListOfferingsResponse;
    };
    sdk: {
      input: ListOfferingsCommandInput;
      output: ListOfferingsCommandOutput;
    };
  };
}
