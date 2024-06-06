// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTablesInput, ListTablesOutput } from "../models/models_0";
import { de_ListTablesCommand, se_ListTablesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTablesCommand}.
 */
export interface ListTablesCommandInput extends ListTablesInput {}
/**
 * @public
 *
 * The output of {@link ListTablesCommand}.
 */
export interface ListTablesCommandOutput extends ListTablesOutput, __MetadataBearer {}

/**
 * <p>Returns an array of table names associated with the current account and endpoint. The
 *             output from <code>ListTables</code> is paginated, with each page returning a maximum of
 *             100 table names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListTablesInput
 *   ExclusiveStartTableName: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListTablesOutput
 * //   TableNames: [ // TableNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   LastEvaluatedTableName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTablesCommandInput - {@link ListTablesCommandInput}
 * @returns {@link ListTablesCommandOutput}
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
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
 * @example To list tables
 * ```javascript
 * // This example lists all of the tables associated with the current AWS account and endpoint.
 * const input = {};
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TableNames": [
 *     "Forum",
 *     "ProductCatalog",
 *     "Reply",
 *     "Thread"
 *   ]
 * }
 * *\/
 * // example id: to-list-tables-1475884741238
 * ```
 *
 */
export class ListTablesCommand extends $Command
  .classBuilder<
    ListTablesCommandInput,
    ListTablesCommandOutput,
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
  .s("DynamoDB_20120810", "ListTables", {})
  .n("DynamoDBClient", "ListTablesCommand")
  .f(void 0, void 0)
  .ser(se_ListTablesCommand)
  .de(de_ListTablesCommand)
  .build() {}
