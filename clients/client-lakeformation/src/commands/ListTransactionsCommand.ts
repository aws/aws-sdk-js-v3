// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTransactionsRequest, ListTransactionsResponse } from "../models/models_0";
import { ListTransactions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandInput extends ListTransactionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandOutput extends ListTransactionsResponse, __MetadataBearer {}

/**
 * Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.
 *
 * This operation can help you identify uncommitted transactions or to get information about transactions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListTransactionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListTransactionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListTransactionsRequest
 *   CatalogId: "STRING_VALUE",
 *   StatusFilter: "ALL" || "COMPLETED" || "ACTIVE" || "COMMITTED" || "ABORTED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTransactionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransactionsResponse
 * //   Transactions: [ // TransactionDescriptionList
 * //     { // TransactionDescription
 * //       TransactionId: "STRING_VALUE",
 * //       TransactionStatus: "ACTIVE" || "COMMITTED" || "ABORTED" || "COMMIT_IN_PROGRESS",
 * //       TransactionStartTime: new Date("TIMESTAMP"),
 * //       TransactionEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransactionsCommandInput - {@link ListTransactionsCommandInput}
 * @returns {@link ListTransactionsCommandOutput}
 * @see {@link ListTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListTransactionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class ListTransactionsCommand extends command<ListTransactionsCommandInput, ListTransactionsCommandOutput>(
  _ep0,
  _mw0,
  "ListTransactions",
  ListTransactions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTransactionsRequest;
      output: ListTransactionsResponse;
    };
    sdk: {
      input: ListTransactionsCommandInput;
      output: ListTransactionsCommandOutput;
    };
  };
}
