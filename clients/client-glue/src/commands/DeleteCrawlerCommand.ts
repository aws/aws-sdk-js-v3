// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteCrawlerRequest, DeleteCrawlerResponse } from "../models/models_1";
import { DeleteCrawler$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCrawlerCommand}.
 */
export interface DeleteCrawlerCommandInput extends DeleteCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCrawlerCommand}.
 */
export interface DeleteCrawlerCommandOutput extends DeleteCrawlerResponse, __MetadataBearer {}

/**
 * <p>Removes a specified crawler from the Glue Data Catalog, unless the crawler state is
 *         <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteCrawlerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteCrawlerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCrawlerCommandInput - {@link DeleteCrawlerCommandInput}
 * @returns {@link DeleteCrawlerCommandOutput}
 * @see {@link DeleteCrawlerCommandInput} for command's `input` shape.
 * @see {@link DeleteCrawlerCommandOutput} for command's `response` shape.
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
 * @throws {@link SchedulerTransitioningException} (client fault)
 *  <p>The specified scheduler is transitioning.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteCrawlerCommand extends $Command
  .classBuilder<
    DeleteCrawlerCommandInput,
    DeleteCrawlerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteCrawler", {})
  .n("GlueClient", "DeleteCrawlerCommand")
  .sc(DeleteCrawler$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCrawlerRequest;
      output: {};
    };
    sdk: {
      input: DeleteCrawlerCommandInput;
      output: DeleteCrawlerCommandOutput;
    };
  };
}
