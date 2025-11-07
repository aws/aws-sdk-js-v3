// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlsRequest, ListCrawlsResponse } from "../models/models_2";
import { ListCrawls } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCrawlsCommand}.
 */
export interface ListCrawlsCommandInput extends ListCrawlsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrawlsCommand}.
 */
export interface ListCrawlsCommandOutput extends ListCrawlsResponse, __MetadataBearer {}

/**
 * <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p>
 *          <p>You may use this API to:</p>
 *          <ul>
 *             <li>
 *                <p>Retrive all the crawls of a specified crawler.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler within a limited count.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler in a specific time range.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCrawlsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListCrawlsRequest
 *   CrawlerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   Filters: [ // CrawlsFilterList
 *     { // CrawlsFilter
 *       FieldName: "CRAWL_ID" || "STATE" || "START_TIME" || "END_TIME" || "DPU_HOUR",
 *       FilterOperator: "GT" || "GE" || "LT" || "LE" || "EQ" || "NE",
 *       FieldValue: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrawlsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrawlsResponse
 * //   Crawls: [ // CrawlerHistoryList
 * //     { // CrawlerHistory
 * //       CrawlId: "STRING_VALUE",
 * //       State: "RUNNING" || "COMPLETED" || "FAILED" || "STOPPED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Summary: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LogGroup: "STRING_VALUE",
 * //       LogStream: "STRING_VALUE",
 * //       MessagePrefix: "STRING_VALUE",
 * //       DPUHour: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrawlsCommandInput - {@link ListCrawlsCommandInput}
 * @returns {@link ListCrawlsCommandOutput}
 * @see {@link ListCrawlsCommandInput} for command's `input` shape.
 * @see {@link ListCrawlsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
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
export class ListCrawlsCommand extends $Command
  .classBuilder<
    ListCrawlsCommandInput,
    ListCrawlsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListCrawls", {})
  .n("GlueClient", "ListCrawlsCommand")
  .sc(ListCrawls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCrawlsRequest;
      output: ListCrawlsResponse;
    };
    sdk: {
      input: ListCrawlsCommandInput;
      output: ListCrawlsCommandOutput;
    };
  };
}
