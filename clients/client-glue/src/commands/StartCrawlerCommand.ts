// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { StartCrawlerRequest, StartCrawlerResponse } from "../models/models_2";
import { StartCrawler$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCrawlerCommand}.
 */
export interface StartCrawlerCommandInput extends StartCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link StartCrawlerCommand}.
 */
export interface StartCrawlerCommandOutput extends StartCrawlerResponse, __MetadataBearer {}

/**
 * <p>Starts a crawl using the specified crawler, regardless
 *       of what is scheduled. If the crawler is already running, returns a
 *       <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartCrawlerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartCrawlerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCrawlerCommandInput - {@link StartCrawlerCommandInput}
 * @returns {@link StartCrawlerCommandOutput}
 * @see {@link StartCrawlerCommandInput} for command's `input` shape.
 * @see {@link StartCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link CrawlerRunningException} (client fault)
 *  <p>The operation cannot be performed because the crawler is already running.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class StartCrawlerCommand extends $Command
  .classBuilder<
    StartCrawlerCommandInput,
    StartCrawlerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartCrawler", {})
  .n("GlueClient", "StartCrawlerCommand")
  .sc(StartCrawler$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCrawlerRequest;
      output: {};
    };
    sdk: {
      input: StartCrawlerCommandInput;
      output: StartCrawlerCommandOutput;
    };
  };
}
