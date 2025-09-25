// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/models_0";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { ExecuteSql } from "../schemas/schemas_1_Execute";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteSqlCommand}.
 */
export interface ExecuteSqlCommandInput extends ExecuteSqlRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteSqlCommand}.
 */
export interface ExecuteSqlCommandOutput extends ExecuteSqlResponse, __MetadataBearer {}

/**
 * <p>Runs one or more SQL statements.</p>
 *          <note>
 *             <p>This operation isn't supported for Aurora Serverless v2 and provisioned DB clusters.
 *             For Aurora Serverless v1 DB clusters, the operation is deprecated.
 *             Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p>
 *          </note>
 *
 * @deprecated The ExecuteSql API is deprecated, please use the ExecuteStatement API.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteSqlCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteSqlCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // import type { RDSDataClientConfig } from "@aws-sdk/client-rds-data";
 * const config = {}; // type is RDSDataClientConfig
 * const client = new RDSDataClient(config);
 * const input = { // ExecuteSqlRequest
 *   dbClusterOrInstanceArn: "STRING_VALUE", // required
 *   awsSecretStoreArn: "STRING_VALUE", // required
 *   sqlStatements: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 * };
 * const command = new ExecuteSqlCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteSqlResponse
 * //   sqlStatementResults: [ // SqlStatementResults
 * //     { // SqlStatementResult
 * //       resultFrame: { // ResultFrame
 * //         resultSetMetadata: { // ResultSetMetadata
 * //           columnCount: Number("long"),
 * //           columnMetadata: [ // Metadata
 * //             { // ColumnMetadata
 * //               name: "STRING_VALUE",
 * //               type: Number("int"),
 * //               typeName: "STRING_VALUE",
 * //               label: "STRING_VALUE",
 * //               schemaName: "STRING_VALUE",
 * //               tableName: "STRING_VALUE",
 * //               isAutoIncrement: true || false,
 * //               isSigned: true || false,
 * //               isCurrency: true || false,
 * //               isCaseSensitive: true || false,
 * //               nullable: Number("int"),
 * //               precision: Number("int"),
 * //               scale: Number("int"),
 * //               arrayBaseColumnType: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         records: [ // Records
 * //           { // Record
 * //             values: [ // Row
 * //               { // Value Union: only one key present
 * //                 isNull: true || false,
 * //                 bitValue: true || false,
 * //                 bigIntValue: Number("long"),
 * //                 intValue: Number("int"),
 * //                 doubleValue: Number("double"),
 * //                 realValue: Number("float"),
 * //                 stringValue: "STRING_VALUE",
 * //                 blobValue: new Uint8Array(),
 * //                 arrayValues: [ // ArrayValueList
 * //                   {//  Union: only one key present
 * //                     isNull: true || false,
 * //                     bitValue: true || false,
 * //                     bigIntValue: Number("long"),
 * //                     intValue: Number("int"),
 * //                     doubleValue: Number("double"),
 * //                     realValue: Number("float"),
 * //                     stringValue: "STRING_VALUE",
 * //                     blobValue: new Uint8Array(),
 * //                     arrayValues: [
 * //                       "<Value>",
 * //                     ],
 * //                     structValue: { // StructValue
 * //                       attributes: "<ArrayValueList>",
 * //                     },
 * //                   },
 * //                 ],
 * //                 structValue: {
 * //                   attributes: "<ArrayValueList>",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       numberOfRecordsUpdated: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ExecuteSqlCommandInput - {@link ExecuteSqlCommandInput}
 * @returns {@link ExecuteSqlCommandOutput}
 * @see {@link ExecuteSqlCommandInput} for command's `input` shape.
 * @see {@link ExecuteSqlCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 *
 * @public
 */
export class ExecuteSqlCommand extends $Command
  .classBuilder<
    ExecuteSqlCommandInput,
    ExecuteSqlCommandOutput,
    RDSDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RdsDataService", "ExecuteSql", {})
  .n("RDSDataClient", "ExecuteSqlCommand")
  .sc(ExecuteSql)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteSqlRequest;
      output: ExecuteSqlResponse;
    };
    sdk: {
      input: ExecuteSqlCommandInput;
      output: ExecuteSqlCommandOutput;
    };
  };
}
