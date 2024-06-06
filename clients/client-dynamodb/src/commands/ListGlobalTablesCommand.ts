// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/models_0";
import { de_ListGlobalTablesCommand, se_ListGlobalTablesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all global tables that have a replica in the specified Region.</p>
 *          <important>
 *             <p>For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version), as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class ListGlobalTablesCommand extends $Command
  .classBuilder<
    ListGlobalTablesCommandInput,
    ListGlobalTablesCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "ListGlobalTables", {})
  .n("DynamoDBClient", "ListGlobalTablesCommand")
  .f(void 0, void 0)
  .ser(se_ListGlobalTablesCommand)
  .de(de_ListGlobalTablesCommand)
  .build() {}
