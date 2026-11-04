// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/models_0";
import { ExecuteSql$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs one or more SQL statements.
 *
 * > **Note:** This operation is deprecated. Please use the `BatchExecuteStatement` or `ExecuteStatement` operation.
 *
 * @deprecated (since 2019-03-21) The ExecuteSql API is deprecated, please use the ExecuteStatement API.
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * There is an error in the call or in a SQL statement. This exception is deprecated.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * There are insufficient privileges to make the call.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *
 * The service specified by the `resourceArn` parameter isn't available.
 *
 * @throws {@link RDSDataServiceException}
 *
 * Base exception class for all service exceptions from RDSData service.
 *
 * @public
 */
export class ExecuteSqlCommand extends command<ExecuteSqlCommandInput, ExecuteSqlCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteSql",
  ExecuteSql$
) {
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
