// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ListColumnStatisticsTaskRunsRequest, ListColumnStatisticsTaskRunsResponse } from "../models/models_2";
import { ListColumnStatisticsTaskRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListColumnStatisticsTaskRunsCommand}.
 */
export interface ListColumnStatisticsTaskRunsCommandInput extends ListColumnStatisticsTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListColumnStatisticsTaskRunsCommand}.
 */
export interface ListColumnStatisticsTaskRunsCommandOutput
  extends ListColumnStatisticsTaskRunsResponse,
    __MetadataBearer {}

/**
 * <p>List all task runs for a particular account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListColumnStatisticsTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListColumnStatisticsTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListColumnStatisticsTaskRunsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListColumnStatisticsTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListColumnStatisticsTaskRunsResponse
 * //   ColumnStatisticsTaskRunIds: [ // ColumnStatisticsTaskRunIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListColumnStatisticsTaskRunsCommandInput - {@link ListColumnStatisticsTaskRunsCommandInput}
 * @returns {@link ListColumnStatisticsTaskRunsCommandOutput}
 * @see {@link ListColumnStatisticsTaskRunsCommandInput} for command's `input` shape.
 * @see {@link ListColumnStatisticsTaskRunsCommandOutput} for command's `response` shape.
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
export class ListColumnStatisticsTaskRunsCommand extends $Command
  .classBuilder<
    ListColumnStatisticsTaskRunsCommandInput,
    ListColumnStatisticsTaskRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListColumnStatisticsTaskRuns", {})
  .n("GlueClient", "ListColumnStatisticsTaskRunsCommand")
  .sc(ListColumnStatisticsTaskRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListColumnStatisticsTaskRunsRequest;
      output: ListColumnStatisticsTaskRunsResponse;
    };
    sdk: {
      input: ListColumnStatisticsTaskRunsCommandInput;
      output: ListColumnStatisticsTaskRunsCommandOutput;
    };
  };
}
