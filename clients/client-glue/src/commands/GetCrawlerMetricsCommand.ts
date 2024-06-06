// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/models_1";
import { de_GetCrawlerMetricsCommand, se_GetCrawlerMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCrawlerMetricsCommand}.
 */
export interface GetCrawlerMetricsCommandInput extends GetCrawlerMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetCrawlerMetricsCommand}.
 */
export interface GetCrawlerMetricsCommandOutput extends GetCrawlerMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieves metrics about specified crawlers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerMetricsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerMetricsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetCrawlerMetricsRequest
 *   CrawlerNameList: [ // CrawlerNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCrawlerMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetCrawlerMetricsResponse
 * //   CrawlerMetricsList: [ // CrawlerMetricsList
 * //     { // CrawlerMetrics
 * //       CrawlerName: "STRING_VALUE",
 * //       TimeLeftSeconds: Number("double"),
 * //       StillEstimating: true || false,
 * //       LastRuntimeSeconds: Number("double"),
 * //       MedianRuntimeSeconds: Number("double"),
 * //       TablesCreated: Number("int"),
 * //       TablesUpdated: Number("int"),
 * //       TablesDeleted: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCrawlerMetricsCommandInput - {@link GetCrawlerMetricsCommandInput}
 * @returns {@link GetCrawlerMetricsCommandOutput}
 * @see {@link GetCrawlerMetricsCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerMetricsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetCrawlerMetricsCommand extends $Command
  .classBuilder<
    GetCrawlerMetricsCommandInput,
    GetCrawlerMetricsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetCrawlerMetrics", {})
  .n("GlueClient", "GetCrawlerMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetCrawlerMetricsCommand)
  .de(de_GetCrawlerMetricsCommand)
  .build() {}
