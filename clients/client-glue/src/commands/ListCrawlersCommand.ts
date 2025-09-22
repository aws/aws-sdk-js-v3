// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlersRequest, ListCrawlersResponse } from "../models/models_2";
import { ListCrawlers } from "../schemas/schemas_92_Crawlers";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCrawlersCommand}.
 */
export interface ListCrawlersCommandInput extends ListCrawlersRequest {}
/**
 * @public
 *
 * The output of {@link ListCrawlersCommand}.
 */
export interface ListCrawlersCommandOutput extends ListCrawlersResponse, __MetadataBearer {}

/**
 * <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the
 *       resources with the specified tag. This operation allows you to see which
 *       resources are available in your account, and their names.</p>
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListCrawlersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListCrawlersCommand(input);
 * const response = await client.send(command);
 * // { // ListCrawlersResponse
 * //   CrawlerNames: [ // CrawlerNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrawlersCommandInput - {@link ListCrawlersCommandInput}
 * @returns {@link ListCrawlersCommandOutput}
 * @see {@link ListCrawlersCommandInput} for command's `input` shape.
 * @see {@link ListCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListCrawlersCommand extends $Command
  .classBuilder<
    ListCrawlersCommandInput,
    ListCrawlersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListCrawlers", {})
  .n("GlueClient", "ListCrawlersCommand")
  .sc(ListCrawlers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCrawlersRequest;
      output: ListCrawlersResponse;
    };
    sdk: {
      input: ListCrawlersCommandInput;
      output: ListCrawlersCommandOutput;
    };
  };
}
