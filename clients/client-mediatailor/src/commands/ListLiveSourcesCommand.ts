// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListLiveSourcesRequest, ListLiveSourcesResponse } from "../models/models_0";
import { de_ListLiveSourcesCommand, se_ListLiveSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLiveSourcesCommand}.
 */
export interface ListLiveSourcesCommandInput extends ListLiveSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListLiveSourcesCommand}.
 */
export interface ListLiveSourcesCommandOutput extends ListLiveSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the live sources contained in a source location. A source represents a piece of content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListLiveSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListLiveSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListLiveSourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new ListLiveSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListLiveSourcesResponse
 * //   Items: [ // __listOfLiveSource
 * //     { // LiveSource
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
 * //       LiveSourceName: "STRING_VALUE", // required
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLiveSourcesCommandInput - {@link ListLiveSourcesCommandInput}
 * @returns {@link ListLiveSourcesCommandOutput}
 * @see {@link ListLiveSourcesCommandInput} for command's `input` shape.
 * @see {@link ListLiveSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListLiveSourcesCommand extends $Command
  .classBuilder<
    ListLiveSourcesCommandInput,
    ListLiveSourcesCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "ListLiveSources", {})
  .n("MediaTailorClient", "ListLiveSourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListLiveSourcesCommand)
  .de(de_ListLiveSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLiveSourcesRequest;
      output: ListLiveSourcesResponse;
    };
    sdk: {
      input: ListLiveSourcesCommandInput;
      output: ListLiveSourcesCommandOutput;
    };
  };
}
