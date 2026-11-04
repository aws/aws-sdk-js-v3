// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIntermediateTablesInput, ListIntermediateTablesOutput } from "../models/models_0";
import { ListIntermediateTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIntermediateTablesCommand}.
 */
export interface ListIntermediateTablesCommandInput extends ListIntermediateTablesInput {}
/**
 * @public
 *
 * The output of {@link ListIntermediateTablesCommand}.
 */
export interface ListIntermediateTablesCommandOutput extends ListIntermediateTablesOutput, __MetadataBearer {}

/**
 * Lists intermediate tables owned by the caller in a membership. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListIntermediateTablesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListIntermediateTablesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListIntermediateTablesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntermediateTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListIntermediateTablesOutput
 * //   intermediateTableSummaries: [ // IntermediateTableSummaryList // required
 * //     { // IntermediateTableSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       membershipArn: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       status: "CREATED" || "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "DISALLOWED_BY_DATA_PROVIDER" || "BASE_TABLE_REMOVED" || "RETENTION_PERIOD_EXPIRED", // required
 * //       retentionInDays: Number("int"),
 * //       analysisRuleTypes: [ // IntermediateTableAnalysisRuleTypeList
 * //         "CUSTOM",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntermediateTablesCommandInput - {@link ListIntermediateTablesCommandInput}
 * @returns {@link ListIntermediateTablesCommandOutput}
 * @see {@link ListIntermediateTablesCommandInput} for command's `input` shape.
 * @see {@link ListIntermediateTablesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
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
export class ListIntermediateTablesCommand extends command<ListIntermediateTablesCommandInput, ListIntermediateTablesCommandOutput>(
  _ep0,
  _mw0,
  "ListIntermediateTables",
  ListIntermediateTables$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntermediateTablesInput;
      output: ListIntermediateTablesOutput;
    };
    sdk: {
      input: ListIntermediateTablesCommandInput;
      output: ListIntermediateTablesCommandOutput;
    };
  };
}
