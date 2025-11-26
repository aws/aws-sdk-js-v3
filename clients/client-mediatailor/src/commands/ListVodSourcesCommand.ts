// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { ListVodSourcesRequest, ListVodSourcesResponse } from "../models/models_0";
import { ListVodSources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVodSourcesCommand}.
 */
export interface ListVodSourcesCommandInput extends ListVodSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListVodSourcesCommand}.
 */
export interface ListVodSourcesCommandOutput extends ListVodSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the VOD sources contained in a source location. A source represents a piece of content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListVodSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListVodSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // ListVodSourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new ListVodSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListVodSourcesResponse
 * //   Items: [ // __listOfVodSource
 * //     { // VodSource
 * //       Arn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       HttpPackageConfigurations: [ // HttpPackageConfigurations // required
 * //         { // HttpPackageConfiguration
 * //           Path: "STRING_VALUE", // required
 * //           SourceGroup: "STRING_VALUE", // required
 * //           Type: "DASH" || "HLS", // required
 * //         },
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       VodSourceName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVodSourcesCommandInput - {@link ListVodSourcesCommandInput}
 * @returns {@link ListVodSourcesCommandOutput}
 * @see {@link ListVodSourcesCommandInput} for command's `input` shape.
 * @see {@link ListVodSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListVodSourcesCommand extends $Command
  .classBuilder<
    ListVodSourcesCommandInput,
    ListVodSourcesCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "ListVodSources", {})
  .n("MediaTailorClient", "ListVodSourcesCommand")
  .sc(ListVodSources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVodSourcesRequest;
      output: ListVodSourcesResponse;
    };
    sdk: {
      input: ListVodSourcesCommandInput;
      output: ListVodSourcesCommandOutput;
    };
  };
}
