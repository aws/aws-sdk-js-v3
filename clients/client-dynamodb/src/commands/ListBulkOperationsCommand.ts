// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBulkOperationsInput, ListBulkOperationsOutput } from "../models/models_0";
import { ListBulkOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBulkOperationsCommand}.
 */
export interface ListBulkOperationsCommandInput extends ListBulkOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListBulkOperationsCommand}.
 */
export interface ListBulkOperationsCommandOutput extends ListBulkOperationsOutput, __MetadataBearer {}

/**
 * <p>Lists bulk operations that started within the past 90 days for the current Amazon Web Services account and Amazon Web Services Region, with the most recent operations
 *             first. Results are paginated. Use the <code>NextToken</code> parameter to retrieve
 *             additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBulkOperationsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBulkOperationsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ListBulkOperationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBulkOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBulkOperationsOutput
 * //   BulkOperationsSummaryList: [ // BulkOperationsSummaryList
 * //     { // BulkOperationSummary
 * //       BulkOperationArn: "STRING_VALUE", // required
 * //       BulkOperationStatus: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELLING" || "CANCELLED" || "FAILED", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBulkOperationsCommandInput - {@link ListBulkOperationsCommandInput}
 * @returns {@link ListBulkOperationsCommandOutput}
 * @see {@link ListBulkOperationsCommandInput} for command's `input` shape.
 * @see {@link ListBulkOperationsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @public
 */
export class ListBulkOperationsCommand extends command<ListBulkOperationsCommandInput, ListBulkOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListBulkOperations",
  ListBulkOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBulkOperationsInput;
      output: ListBulkOperationsOutput;
    };
    sdk: {
      input: ListBulkOperationsCommandInput;
      output: ListBulkOperationsCommandOutput;
    };
  };
}
