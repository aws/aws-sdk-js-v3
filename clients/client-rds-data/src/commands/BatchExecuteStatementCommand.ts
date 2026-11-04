// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "../models/models_0";
import { BatchExecuteStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs a batch SQL statement over an array of data.
 *
 * You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.
 *
 * > **Note:**
 * >
 * > If a call isn't part of a transaction because it doesn't include the `transactionID` parameter, changes that result from the call are committed automatically.
 * >
 * > There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.
 * >
 * > The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // import type { RDSDataClientConfig } from "@aws-sdk/client-rds-data";
 * const config = {}; // type is RDSDataClientConfig
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
 *         typeHint: "JSON" || "UUID" || "TIMESTAMP" || "DATE" || "TIME" || "DECIMAL",
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * There is an error in the call or in a SQL statement. This exception is deprecated.
 *
 * @throws {@link DatabaseErrorException} (client fault)
 *
 * There was an error in processing the SQL statement.
 *
 * @throws {@link DatabaseNotFoundException} (client fault)
 *
 * The DB cluster doesn't have a DB instance.
 *
 * @throws {@link DatabaseResumingException} (client fault)
 *
 * A request was cancelled because the Aurora Serverless DB instance was paused. The Data API request automatically resumes the DB instance. Wait a few seconds and try again.
 *
 * @throws {@link DatabaseUnavailableException} (server fault)
 *
 * The writer instance in the DB cluster isn't available.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * There are insufficient privileges to make the call.
 *
 * @throws {@link HttpEndpointNotEnabledException} (client fault)
 *
 * The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The resource is in an invalid state.
 *
 * @throws {@link InvalidSecretException} (client fault)
 *
 * The Secrets Manager secret used with the request isn't valid.
 *
 * @throws {@link SecretsErrorException} (client fault)
 *
 * There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:
 *
 * - RDS Data API timed out retrieving the secret.
 * - The secret provided wasn't found.
 * - The secret couldn't be decrypted.
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *
 * The service specified by the `resourceArn` parameter isn't available.
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *
 * The execution of the SQL statement timed out.
 *
 * @throws {@link TransactionNotFoundException} (client fault)
 *
 * The transaction ID wasn't found.
 *
 * @throws {@link RDSDataServiceException}
 *
 * Base exception class for all service exceptions from RDSData service.
 *
 * @public
 */
export class BatchExecuteStatementCommand extends command<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput>(
  _ep0,
  _mw0,
  "BatchExecuteStatement",
  BatchExecuteStatement$
) {
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
