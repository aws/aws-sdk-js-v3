// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models/models_0";
import { de_ExecuteStatementCommand, se_ExecuteStatementCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandInput extends ExecuteStatementRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementResponse, __MetadataBearer {}

/**
 * <p>Runs a SQL statement against a database.</p>
 *          <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *             <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSDataClient(config);
 * const input = { // ExecuteStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   sql: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 *   parameters: [ // SqlParametersList
 *     { // SqlParameter
 *       name: "STRING_VALUE",
 *       value: { // Field Union: only one key present
 *         isNull: true || false,
 *         booleanValue: true || false,
 *         longValue: Number("long"),
 *         doubleValue: Number("double"),
 *         stringValue: "STRING_VALUE",
 *         blobValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         arrayValue: { // ArrayValue Union: only one key present
 *           booleanValues: [ // BooleanArray
 *             true || false,
 *           ],
 *           longValues: [ // LongArray
 *             Number("long"),
 *           ],
 *           doubleValues: [ // DoubleArray
 *             Number("double"),
 *           ],
 *           stringValues: [ // StringArray
 *             "STRING_VALUE",
 *           ],
 *           arrayValues: [ // ArrayOfArray
 *             {//  Union: only one key present
 *               booleanValues: [
 *                 true || false,
 *               ],
 *               longValues: [
 *                 Number("long"),
 *               ],
 *               doubleValues: [
 *                 Number("double"),
 *               ],
 *               stringValues: [
 *                 "STRING_VALUE",
 *               ],
 *               arrayValues: [
 *                 "<ArrayValue>",
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *       typeHint: "STRING_VALUE",
 *     },
 *   ],
 *   transactionId: "STRING_VALUE",
 *   includeResultMetadata: true || false,
 *   continueAfterTimeout: true || false,
 *   resultSetOptions: { // ResultSetOptions
 *     decimalReturnType: "STRING_VALUE",
 *     longReturnType: "STRING_VALUE",
 *   },
 *   formatRecordsAs: "STRING_VALUE",
 * };
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteStatementResponse
 * //   records: [ // SqlRecords
 * //     [ // FieldList
 * //       { // Field Union: only one key present
 * //         isNull: true || false,
 * //         booleanValue: true || false,
 * //         longValue: Number("long"),
 * //         doubleValue: Number("double"),
 * //         stringValue: "STRING_VALUE",
 * //         blobValue: new Uint8Array(),
 * //         arrayValue: { // ArrayValue Union: only one key present
 * //           booleanValues: [ // BooleanArray
 * //             true || false,
 * //           ],
 * //           longValues: [ // LongArray
 * //             Number("long"),
 * //           ],
 * //           doubleValues: [ // DoubleArray
 * //             Number("double"),
 * //           ],
 * //           stringValues: [ // StringArray
 * //             "STRING_VALUE",
 * //           ],
 * //           arrayValues: [ // ArrayOfArray
 * //             {//  Union: only one key present
 * //               booleanValues: [
 * //                 true || false,
 * //               ],
 * //               longValues: [
 * //                 Number("long"),
 * //               ],
 * //               doubleValues: [
 * //                 Number("double"),
 * //               ],
 * //               stringValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               arrayValues: [
 * //                 "<ArrayValue>",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   ],
 * //   columnMetadata: [ // Metadata
 * //     { // ColumnMetadata
 * //       name: "STRING_VALUE",
 * //       type: Number("int"),
 * //       typeName: "STRING_VALUE",
 * //       label: "STRING_VALUE",
 * //       schemaName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       isAutoIncrement: true || false,
 * //       isSigned: true || false,
 * //       isCurrency: true || false,
 * //       isCaseSensitive: true || false,
 * //       nullable: Number("int"),
 * //       precision: Number("int"),
 * //       scale: Number("int"),
 * //       arrayBaseColumnType: Number("int"),
 * //     },
 * //   ],
 * //   numberOfRecordsUpdated: Number("long"),
 * //   generatedFields: [
 * //     {//  Union: only one key present
 * //       isNull: true || false,
 * //       booleanValue: true || false,
 * //       longValue: Number("long"),
 * //       doubleValue: Number("double"),
 * //       stringValue: "STRING_VALUE",
 * //       blobValue: new Uint8Array(),
 * //       arrayValue: "<ArrayValue>",
 * //     },
 * //   ],
 * //   formattedRecords: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteStatementCommandInput - {@link ExecuteStatementCommandInput}
 * @returns {@link ExecuteStatementCommandOutput}
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 *
 * @throws {@link DatabaseErrorException} (client fault)
 *  <p>There was an error in processing the SQL statement.</p>
 *
 * @throws {@link DatabaseNotFoundException} (client fault)
 *  <p>The DB cluster doesn't have a DB instance.</p>
 *
 * @throws {@link DatabaseResumingException} (client fault)
 *  <p>A request was canceled because the Aurora Serverless v2 DB instance was in a paused state.
 *       The Data API request automatically causes the DB instance to begin resuming. Wait a few seconds and
 *       try again.</p>
 *
 * @throws {@link DatabaseUnavailableException} (server fault)
 *  <p>The writer instance in the DB cluster isn't available.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link HttpEndpointNotEnabledException} (client fault)
 *  <p>The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidSecretException} (client fault)
 *  <p>The Secrets Manager secret used with the request isn't valid.</p>
 *
 * @throws {@link SecretsErrorException} (client fault)
 *  <p>There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>RDS Data API timed out retrieving the secret.</p>
 *             </li>
 *             <li>
 *                <p>The secret provided wasn't found.</p>
 *             </li>
 *             <li>
 *                <p>The secret couldn't be decrypted.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *  <p>The execution of the SQL statement timed out.</p>
 *
 * @throws {@link TransactionNotFoundException} (client fault)
 *  <p>The transaction ID wasn't found.</p>
 *
 * @throws {@link UnsupportedResultException} (client fault)
 *  <p>There was a problem with the result because of one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>It contained an unsupported data type.</p>
 *             </li>
 *             <li>
 *                <p>It contained a multidimensional array.</p>
 *             </li>
 *             <li>
 *                <p>The size was too large.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 * @public
 */
export class ExecuteStatementCommand extends $Command
  .classBuilder<
    ExecuteStatementCommandInput,
    ExecuteStatementCommandOutput,
    RDSDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RdsDataService", "ExecuteStatement", {})
  .n("RDSDataClient", "ExecuteStatementCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteStatementCommand)
  .de(de_ExecuteStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteStatementRequest;
      output: ExecuteStatementResponse;
    };
    sdk: {
      input: ExecuteStatementCommandInput;
      output: ExecuteStatementCommandOutput;
    };
  };
}
