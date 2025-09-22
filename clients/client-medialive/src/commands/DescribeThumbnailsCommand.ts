// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeThumbnailsRequest, DescribeThumbnailsResponse } from "../models/models_2";
import { DescribeThumbnails } from "../schemas/schemas_30_DescribeThumbnails";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThumbnailsCommand}.
 */
export interface DescribeThumbnailsCommandInput extends DescribeThumbnailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThumbnailsCommand}.
 */
export interface DescribeThumbnailsCommandOutput extends DescribeThumbnailsResponse, __MetadataBearer {}

/**
 * Describe the latest thumbnails data.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeThumbnailsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeThumbnailsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeThumbnailsRequest
 *   ChannelId: "STRING_VALUE", // required
 *   PipelineId: "STRING_VALUE", // required
 *   ThumbnailType: "STRING_VALUE", // required
 * };
 * const command = new DescribeThumbnailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThumbnailsResponse
 * //   ThumbnailDetails: [ // __listOfThumbnailDetail
 * //     { // ThumbnailDetail
 * //       PipelineId: "STRING_VALUE",
 * //       Thumbnails: [ // __listOfThumbnail
 * //         { // Thumbnail
 * //           Body: "STRING_VALUE",
 * //           ContentType: "STRING_VALUE",
 * //           ThumbnailType: "UNSPECIFIED" || "CURRENT_ACTIVE",
 * //           TimeStamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeThumbnailsCommandInput - {@link DescribeThumbnailsCommandInput}
 * @returns {@link DescribeThumbnailsCommandOutput}
 * @see {@link DescribeThumbnailsCommandInput} for command's `input` shape.
 * @see {@link DescribeThumbnailsCommandOutput} for command's `response` shape.
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
export class DescribeThumbnailsCommand extends $Command
  .classBuilder<
    DescribeThumbnailsCommandInput,
    DescribeThumbnailsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeThumbnails", {})
  .n("MediaLiveClient", "DescribeThumbnailsCommand")
  .sc(DescribeThumbnails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThumbnailsRequest;
      output: DescribeThumbnailsResponse;
    };
    sdk: {
      input: DescribeThumbnailsCommandInput;
      output: DescribeThumbnailsCommandOutput;
    };
  };
}
