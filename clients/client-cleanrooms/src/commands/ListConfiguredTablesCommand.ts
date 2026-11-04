// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConfiguredTablesInput, ListConfiguredTablesOutput } from "../models/models_0";
import { ListConfiguredTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfiguredTablesCommand}.
 */
export interface ListConfiguredTablesCommandInput extends ListConfiguredTablesInput {}
/**
 * @public
 *
 * The output of {@link ListConfiguredTablesCommand}.
 */
export interface ListConfiguredTablesCommandOutput extends ListConfiguredTablesOutput, __MetadataBearer {}

/**
 * Lists configured tables.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredTablesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredTablesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListConfiguredTablesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredTablesOutput
 * //   configuredTableSummaries: [ // ConfiguredTableSummaryList // required
 * //     { // ConfiguredTableSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       tableType: "GLUE" || "SNOWFLAKE" || "ATHENA" || "DATABRICKS",
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       analysisRuleTypes: [ // ConfiguredTableAnalysisRuleTypeList // required
 * //         "AGGREGATION" || "LIST" || "CUSTOM",
 * //       ],
 * //       analysisMethod: "DIRECT_QUERY" || "DIRECT_JOB" || "MULTIPLE", // required
 * //       selectedAnalysisMethods: [ // SelectedAnalysisMethods
 * //         "DIRECT_QUERY" || "DIRECT_JOB",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfiguredTablesCommandInput - {@link ListConfiguredTablesCommandInput}
 * @returns {@link ListConfiguredTablesCommandOutput}
 * @see {@link ListConfiguredTablesCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredTablesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListConfiguredTablesCommand extends command<ListConfiguredTablesCommandInput, ListConfiguredTablesCommandOutput>(
  _ep0,
  _mw0,
  "ListConfiguredTables",
  ListConfiguredTables$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredTablesInput;
      output: ListConfiguredTablesOutput;
    };
    sdk: {
      input: ListConfiguredTablesCommandInput;
      output: ListConfiguredTablesCommandOutput;
    };
  };
}
