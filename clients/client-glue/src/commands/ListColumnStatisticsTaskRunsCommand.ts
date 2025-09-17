// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListColumnStatisticsTaskRunsRequest, ListColumnStatisticsTaskRunsResponse } from "../models/models_2";
import {
  de_ListColumnStatisticsTaskRunsCommand,
  se_ListColumnStatisticsTaskRunsCommand,
} from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListColumnStatisticsTaskRuns", {})
  .n("GlueClient", "ListColumnStatisticsTaskRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListColumnStatisticsTaskRunsCommand)
  .de(de_ListColumnStatisticsTaskRunsCommand)
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
