// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeVodSourceRequest, DescribeVodSourceResponse } from "../models/models_0";
import { de_DescribeVodSourceCommand, se_DescribeVodSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVodSourceCommand}.
 */
export interface DescribeVodSourceCommandInput extends DescribeVodSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVodSourceCommand}.
 */
export interface DescribeVodSourceCommandOutput extends DescribeVodSourceResponse, __MetadataBearer {}

/**
 * <p>Provides details about a specific video on demand (VOD) source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // DescribeVodSourceRequest
 *   SourceLocationName: "STRING_VALUE", // required
 *   VodSourceName: "STRING_VALUE", // required
 * };
 * const command = new DescribeVodSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVodSourceResponse
 * //   AdBreakOpportunities: [ // AdBreakOpportunities
 * //     { // AdBreakOpportunity
 * //       OffsetMillis: Number("long"), // required
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   HttpPackageConfigurations: [ // HttpPackageConfigurations
 * //     { // HttpPackageConfiguration
 * //       Path: "STRING_VALUE", // required
 * //       SourceGroup: "STRING_VALUE", // required
 * //       Type: "DASH" || "HLS", // required
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   SourceLocationName: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   VodSourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVodSourceCommandInput - {@link DescribeVodSourceCommandInput}
 * @returns {@link DescribeVodSourceCommandOutput}
 * @see {@link DescribeVodSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class DescribeVodSourceCommand extends $Command
  .classBuilder<
    DescribeVodSourceCommandInput,
    DescribeVodSourceCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "DescribeVodSource", {})
  .n("MediaTailorClient", "DescribeVodSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVodSourceCommand)
  .de(de_DescribeVodSourceCommand)
  .build() {}
