// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "../models/models_0";
import { de_BatchExecuteStatementCommand, se_BatchExecuteStatementCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementRequest {}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementResponse, __MetadataBearer {}

/**
 * <p>Runs a batch SQL statement over an array of data.</p>
 *          <p>You can run bulk update and insert operations for multiple records using a DML
 *             statement with different parameter sets. Bulk operations can provide a significant
 *             performance improvement over individual insert and update operations.</p>
 *          <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter,
 *                 changes that result from the call are committed automatically.</p>
 *             <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request
 *                 submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't
 *                 process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the
 *                 number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and
 *                 the size of each parameter set.</p>
 *             <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // BatchExecuteStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   sql: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 *   parameterSets: [ // SqlParameterSets
 *     [ // SqlParametersList
 *       { // SqlParameter
 *         name: "STRING_VALUE",
 *         value: { // Field Union: only one key present
 *           isNull: true || false,
 *           booleanValue: true || false,
 *           longValue: Number("long"),
 *           doubleValue: Number("double"),
 *           stringValue: "STRING_VALUE",
 *           blobValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           arrayValue: { // ArrayValue Union: only one key present
 *             booleanValues: [ // BooleanArray
 *               true || false,
 *             ],
 *             longValues: [ // LongArray
 *               Number("long"),
 *             ],
 *             doubleValues: [ // DoubleArray
 *               Number("double"),
 *             ],
 *             stringValues: [ // StringArray
 *               "STRING_VALUE",
 *             ],
 *             arrayValues: [ // ArrayOfArray
 *               {//  Union: only one key present
 *                 booleanValues: [
 *                   true || false,
 *                 ],
 *                 longValues: [
 *                   Number("long"),
 *                 ],
 *                 doubleValues: [
 *                   Number("double"),
 *                 ],
 *                 stringValues: [
 *                   "STRING_VALUE",
 *                 ],
 *                 arrayValues: [
 *                   "<ArrayValue>",
 *                 ],
 *               },
 *             ],
 *           },
 *         },
 *         typeHint: "STRING_VALUE",
 *       },
 *     ],
 *   ],
 *   transactionId: "STRING_VALUE",
 * };
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchExecuteStatementResponse
 * //   updateResults: [ // UpdateResults
 * //     { // UpdateResult
 * //       generatedFields: [ // FieldList
 * //         { // Field Union: only one key present
 * //           isNull: true || false,
 * //           booleanValue: true || false,
 * //           longValue: Number("long"),
 * //           doubleValue: Number("double"),
 * //           stringValue: "STRING_VALUE",
 * //           blobValue: new Uint8Array(),
 * //           arrayValue: { // ArrayValue Union: only one key present
 * //             booleanValues: [ // BooleanArray
 * //               true || false,
 * //             ],
 * //             longValues: [ // LongArray
 * //               Number("long"),
 * //             ],
 * //             doubleValues: [ // DoubleArray
 * //               Number("double"),
 * //             ],
 * //             stringValues: [ // StringArray
 * //               "STRING_VALUE",
 * //             ],
 * //             arrayValues: [ // ArrayOfArray
 * //               {//  Union: only one key present
 * //                 booleanValues: [
 * //                   true || false,
 * //                 ],
 * //                 longValues: [
 * //                   Number("long"),
 * //                 ],
 * //                 doubleValues: [
 * //                   Number("double"),
 * //                 ],
 * //                 stringValues: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 arrayValues: [
 * //                   "<ArrayValue>",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchExecuteStatementCommandInput - {@link BatchExecuteStatementCommandInput}
 * @returns {@link BatchExecuteStatementCommandOutput}
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
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
 *  <p>A request was cancelled because the Aurora Serverless v2 DB instance was paused.
 *          The Data API request automatically resumes the DB instance. Wait a few seconds and
 *          try again.</p>
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
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The resource is in an invalid state.</p>
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
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 *
 * @public
 */
export class BatchExecuteStatementCommand extends $Command
  .classBuilder<
    BatchExecuteStatementCommandInput,
    BatchExecuteStatementCommandOutput,
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
  .s("RdsDataService", "BatchExecuteStatement", {})
  .n("RDSDataClient", "BatchExecuteStatementCommand")
  .f(void 0, void 0)
  .ser(se_BatchExecuteStatementCommand)
  .de(de_BatchExecuteStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchExecuteStatementRequest;
      output: BatchExecuteStatementResponse;
    };
    sdk: {
      input: BatchExecuteStatementCommandInput;
      output: BatchExecuteStatementCommandOutput;
    };
  };
}
