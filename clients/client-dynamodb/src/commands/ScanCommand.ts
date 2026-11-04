// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { ScanInput, ScanOutput } from "../models/models_0";
import { Scan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ScanCommand}.
 */
export interface ScanCommandInput extends ScanInput {}
/**
 * @public
 *
 * The output of {@link ScanCommand}.
 */
export interface ScanCommandOutput extends ScanOutput, __MetadataBearer {}

/**
 * The `Scan` operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a `FilterExpression` operation.
 *
 * If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The `LastEvaluatedKey` value is also returned and the requestor can use the `LastEvaluatedKey` to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a `FilterExpression`, a scan result can result in no items meeting the criteria and the `Count` will result in zero. If you did not use a `FilterExpression` in the scan request, then `Count` is the same as `ScannedCount`.
 *
 * > **Note:** `Count` and `ScannedCount` only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table.
 *
 * A single `Scan` operation first reads up to the maximum number of items set (if using the `Limit` parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a `FilterExpression` is provided. If `LastEvaluatedKey` is present in the response, pagination is required to complete the full table scan. For more information, see [Paginating the Results](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination) in the *Amazon DynamoDB Developer Guide*.
 *
 * `Scan` operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel `Scan` operation by providing the `Segment` and `TotalSegments` parameters. For more information, see [Parallel Scan](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan) in the *Amazon DynamoDB Developer Guide*.
 *
 * By default, a `Scan` uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent `Scan` may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the `ConsistentRead` parameter to true. Strong consistency only relates to the consistency of the read at the item level.
 *
 * > **Note:** DynamoDB does not provide snapshot isolation for a scan operation when the `ConsistentRead` parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ScanInput
 *   TableName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE",
 *   AttributesToGet: [ // AttributeNameList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   Select: "ALL_ATTRIBUTES" || "ALL_PROJECTED_ATTRIBUTES" || "SPECIFIC_ATTRIBUTES" || "COUNT",
 *   ScanFilter: { // FilterConditionMap
 *     "<keys>": { // Condition
 *       AttributeValueList: [ // AttributeValueList
 *         { // AttributeValue Union: only one key present
 *           S: "STRING_VALUE",
 *           N: "STRING_VALUE",
 *           B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           SS: [ // StringSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           NS: [ // NumberSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           BS: [ // BinarySetAttributeValue
 *             new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           ],
 *           M: { // MapAttributeValue
 *             "<keys>": {//  Union: only one key present
 *               S: "STRING_VALUE",
 *               N: "STRING_VALUE",
 *               B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               SS: [
 *                 "STRING_VALUE",
 *               ],
 *               NS: [
 *                 "STRING_VALUE",
 *               ],
 *               BS: [
 *                 new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               ],
 *               M: {
 *                 "<keys>": "<AttributeValue>",
 *               },
 *               L: [ // ListAttributeValue
 *                 "<AttributeValue>",
 *               ],
 *               NULL: true || false,
 *               BOOL: true || false,
 *             },
 *           },
 *           L: [
 *             "<AttributeValue>",
 *           ],
 *           NULL: true || false,
 *           BOOL: true || false,
 *         },
 *       ],
 *       ComparisonOperator: "EQ" || "NE" || "IN" || "LE" || "LT" || "GE" || "GT" || "BETWEEN" || "NOT_NULL" || "NULL" || "CONTAINS" || "NOT_CONTAINS" || "BEGINS_WITH", // required
 *     },
 *   },
 *   ConditionalOperator: "AND" || "OR",
 *   ExclusiveStartKey: { // Key
 *     "<keys>": "<AttributeValue>",
 *   },
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 *   TotalSegments: Number("int"),
 *   Segment: Number("int"),
 *   ProjectionExpression: "STRING_VALUE",
 *   FilterExpression: "STRING_VALUE",
 *   ExpressionAttributeNames: { // ExpressionAttributeNameMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ExpressionAttributeValues: { // ExpressionAttributeValueMap
 *     "<keys>": "<AttributeValue>",
 *   },
 *   ConsistentRead: true || false,
 * };
 * const command = new ScanCommand(input);
 * const response = await client.send(command);
 * // { // ScanOutput
 * //   Items: [ // ItemList
 * //     { // AttributeMap
 * //       "<keys>": { // AttributeValue Union: only one key present
 * //         S: "STRING_VALUE",
 * //         N: "STRING_VALUE",
 * //         B: new Uint8Array(),
 * //         SS: [ // StringSetAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         NS: [ // NumberSetAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         BS: [ // BinarySetAttributeValue
 * //           new Uint8Array(),
 * //         ],
 * //         M: { // MapAttributeValue
 * //           "<keys>": {//  Union: only one key present
 * //             S: "STRING_VALUE",
 * //             N: "STRING_VALUE",
 * //             B: new Uint8Array(),
 * //             SS: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NS: [
 * //               "STRING_VALUE",
 * //             ],
 * //             BS: [
 * //               new Uint8Array(),
 * //             ],
 * //             M: {
 * //               "<keys>": "<AttributeValue>",
 * //             },
 * //             L: [ // ListAttributeValue
 * //               "<AttributeValue>",
 * //             ],
 * //             NULL: true || false,
 * //             BOOL: true || false,
 * //           },
 * //         },
 * //         L: [
 * //           "<AttributeValue>",
 * //         ],
 * //         NULL: true || false,
 * //         BOOL: true || false,
 * //       },
 * //     },
 * //   ],
 * //   Count: Number("int"),
 * //   ScannedCount: Number("int"),
 * //   LastEvaluatedKey: { // Key
 * //     "<keys>": "<AttributeValue>",
 * //   },
 * //   ConsumedCapacity: { // ConsumedCapacity
 * //     TableName: "STRING_VALUE",
 * //     CapacityUnits: Number("double"),
 * //     ReadCapacityUnits: Number("double"),
 * //     WriteCapacityUnits: Number("double"),
 * //     Table: { // Capacity
 * //       ReadCapacityUnits: Number("double"),
 * //       WriteCapacityUnits: Number("double"),
 * //       CapacityUnits: Number("double"),
 * //     },
 * //     LocalSecondaryIndexes: { // SecondaryIndexesCapacityMap
 * //       "<keys>": {
 * //         ReadCapacityUnits: Number("double"),
 * //         WriteCapacityUnits: Number("double"),
 * //         CapacityUnits: Number("double"),
 * //       },
 * //     },
 * //     GlobalSecondaryIndexes: {
 * //       "<keys>": {
 * //         ReadCapacityUnits: Number("double"),
 * //         WriteCapacityUnits: Number("double"),
 * //         CapacityUnits: Number("double"),
 * //       },
 * //     },
 * //     VectorIndexes: { // VectorIndexesCapacityMap
 * //       "<keys>": { // VectorCapacity
 * //         VectorSearchRequestBytes: Number("double"),
 * //         VectorWriteRequestBytes: Number("double"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ScanCommandInput - {@link ScanCommandInput}
 * @returns {@link ScanCommandOutput}
 * @see {@link ScanCommandInput} for command's `input` shape.
 * @see {@link ScanCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. The Amazon Web Services SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to [Error Retries and Exponential Backoff](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff) in the *Amazon DynamoDB Developer Guide*.
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *
 * Throughput exceeds the current throughput quota for your account. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. Contact [Amazon Web Services Support](https://aws.amazon.com/support) to request a quota increase.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception.
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @example To scan a table
 * ```javascript
 * // This example scans the entire Music table, and then narrows the results to songs by the artist "No One You Know". For each item, only the album title and song title are returned.
 * const input = {
 *   ExpressionAttributeNames: {
 *     #AT: "AlbumTitle",
 *     #ST: "SongTitle"
 *   },
 *   ExpressionAttributeValues: {
 *     :a: {
 *       S: "No One You Know"
 *     }
 *   },
 *   FilterExpression: "Artist = :a",
 *   ProjectionExpression: "#ST, #AT",
 *   TableName: "Music"
 * };
 * const command = new ScanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConsumedCapacity:   { /* empty *\/ },
 *   Count: 2,
 *   Items: [
 *     {
 *       AlbumTitle: {
 *         S: "Somewhat Famous"
 *       },
 *       SongTitle: {
 *         S: "Call Me Today"
 *       }
 *     },
 *     {
 *       AlbumTitle: {
 *         S: "Blue Sky Blues"
 *       },
 *       SongTitle: {
 *         S: "Scared of My Shadow"
 *       }
 *     }
 *   ],
 *   ScannedCount: 3
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ScanCommand extends command<ScanCommandInput, ScanCommandOutput>(
  _ep2,
  _mw0,
  "Scan",
  Scan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScanInput;
      output: ScanOutput;
    };
    sdk: {
      input: ScanCommandInput;
      output: ScanCommandOutput;
    };
  };
}
