// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/models_0";
import { ListGlobalTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGlobalTablesCommand}.
 */
export interface ListGlobalTablesCommandInput extends ListGlobalTablesInput {}
/**
 * @public
 *
 * The output of {@link ListGlobalTablesCommand}.
 */
export interface ListGlobalTablesCommandOutput extends ListGlobalTablesOutput, __MetadataBearer {}

/**
 * Lists all global tables that have a replica in the specified Region.
 *
 * > **Important:**
 * >
 * > This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use [Global Tables version 2019.11.21 (Current)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy).
 * >
 * > To determine which version you're using, see [Determining the global table version you are using](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html). To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see [Upgrading global tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ListGlobalTablesInput
 *   ExclusiveStartGlobalTableName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   RegionName: "STRING_VALUE",
 * };
 * const command = new ListGlobalTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListGlobalTablesOutput
 * //   GlobalTables: [ // GlobalTableList
 * //     { // GlobalTable
 * //       GlobalTableName: "STRING_VALUE",
 * //       ReplicationGroup: [ // ReplicaList
 * //         { // Replica
 * //           RegionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   LastEvaluatedGlobalTableName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGlobalTablesCommandInput - {@link ListGlobalTablesCommandInput}
 * @returns {@link ListGlobalTablesCommandOutput}
 * @see {@link ListGlobalTablesCommandInput} for command's `input` shape.
 * @see {@link ListGlobalTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class ListGlobalTablesCommand extends command<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput>(
  _ep0,
  _mw0,
  "ListGlobalTables",
  ListGlobalTables$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGlobalTablesInput;
      output: ListGlobalTablesOutput;
    };
    sdk: {
      input: ListGlobalTablesCommandInput;
      output: ListGlobalTablesCommandOutput;
    };
  };
}
