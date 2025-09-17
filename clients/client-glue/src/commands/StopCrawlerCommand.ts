// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerRequest, StopCrawlerResponse } from "../models/models_3";
import { de_StopCrawlerCommand, se_StopCrawlerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCrawlerCommand}.
 */
export interface StopCrawlerCommandInput extends StopCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link StopCrawlerCommand}.
 */
export interface StopCrawlerCommandOutput extends StopCrawlerResponse, __MetadataBearer {}

/**
 * <p>If the specified crawler is running, stops the crawl.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopCrawlerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopCrawlerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCrawlerCommandInput - {@link StopCrawlerCommandInput}
 * @returns {@link StopCrawlerCommandOutput}
 * @see {@link StopCrawlerCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link CrawlerNotRunningException} (client fault)
 *  <p>The specified crawler is not running.</p>
 *
 * @throws {@link CrawlerStoppingException} (client fault)
 *  <p>The specified crawler is stopping.</p>
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
export class StopCrawlerCommand extends $Command
  .classBuilder<
    StopCrawlerCommandInput,
    StopCrawlerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StopCrawler", {})
  .n("GlueClient", "StopCrawlerCommand")
  .f(void 0, void 0)
  .ser(se_StopCrawlerCommand)
  .de(de_StopCrawlerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCrawlerRequest;
      output: {};
    };
    sdk: {
      input: StopCrawlerCommandInput;
      output: StopCrawlerCommandOutput;
    };
  };
}
