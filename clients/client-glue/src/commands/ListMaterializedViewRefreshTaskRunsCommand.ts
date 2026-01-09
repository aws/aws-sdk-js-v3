// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  ListMaterializedViewRefreshTaskRunsRequest,
  ListMaterializedViewRefreshTaskRunsResponse,
} from "../models/models_2";
import { ListMaterializedViewRefreshTaskRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMaterializedViewRefreshTaskRunsCommand}.
 */
export interface ListMaterializedViewRefreshTaskRunsCommandInput extends ListMaterializedViewRefreshTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListMaterializedViewRefreshTaskRunsCommand}.
 */
export interface ListMaterializedViewRefreshTaskRunsCommandOutput extends ListMaterializedViewRefreshTaskRunsResponse, __MetadataBearer {}

/**
 * <p>List all task runs for a particular account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListMaterializedViewRefreshTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListMaterializedViewRefreshTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListMaterializedViewRefreshTaskRunsRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE",
 *   TableName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMaterializedViewRefreshTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListMaterializedViewRefreshTaskRunsResponse
 * //   MaterializedViewRefreshTaskRuns: [ // MaterializedViewRefreshTaskRunsList
 * //     { // MaterializedViewRefreshTaskRun
 * //       CustomerId: "STRING_VALUE",
 * //       MaterializedViewRefreshTaskRunId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       CatalogId: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //       DPUSeconds: Number("double"),
 * //       RefreshType: "FULL" || "INCREMENTAL",
 * //       ProcessedBytes: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMaterializedViewRefreshTaskRunsCommandInput - {@link ListMaterializedViewRefreshTaskRunsCommandInput}
 * @returns {@link ListMaterializedViewRefreshTaskRunsCommandOutput}
 * @see {@link ListMaterializedViewRefreshTaskRunsCommandInput} for command's `input` shape.
 * @see {@link ListMaterializedViewRefreshTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class ListMaterializedViewRefreshTaskRunsCommand extends $Command
  .classBuilder<
    ListMaterializedViewRefreshTaskRunsCommandInput,
    ListMaterializedViewRefreshTaskRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListMaterializedViewRefreshTaskRuns", {})
  .n("GlueClient", "ListMaterializedViewRefreshTaskRunsCommand")
  .sc(ListMaterializedViewRefreshTaskRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMaterializedViewRefreshTaskRunsRequest;
      output: ListMaterializedViewRefreshTaskRunsResponse;
    };
    sdk: {
      input: ListMaterializedViewRefreshTaskRunsCommandInput;
      output: ListMaterializedViewRefreshTaskRunsCommandOutput;
    };
  };
}
