// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep11, _mw0, command } from "../commandBuilder";
import type { SearchVectorsInput, SearchVectorsOutput } from "../models/models_0";
import { SearchVectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchVectorsCommand}.
 */
export interface SearchVectorsCommandInput extends SearchVectorsInput {}
/**
 * @public
 *
 * The output of {@link SearchVectorsCommand}.
 */
export interface SearchVectorsCommandOutput extends SearchVectorsOutput, __MetadataBearer {}

/**
 * <p>Performs a vector similarity search on a vector index associated with an Amazon
 *             DynamoDB table, and returns the most similar items sorted by similarity score
 *             based on the distance function configured for the index.</p>
 *          <p>Score interpretation depends on the distance function:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>COSINE</code> - Returns the items with the <i>k
 *                     smallest</i> scores. Scores range from 0 (identical) to 2 (opposite).
 *                     Lower scores indicate higher similarity.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EUCLIDEAN</code> - Returns the items with the <i>k
 *                     smallest</i> scores. Scores represent the Euclidean distance between
 *                     vectors. Lower scores indicate higher similarity.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DOT_PRODUCT</code> - Returns the items with the <i>k
 *                     highest</i> scores. Higher scores indicate higher similarity.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, SearchVectorsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, SearchVectorsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // SearchVectorsInput
 *   TableName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE", // required
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 *   ExpressionAttributeNames: { // ExpressionAttributeNameMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ExpressionAttributeValues: { // ExpressionAttributeValueMap
 *     "<keys>": { // AttributeValue Union: only one key present
 *       S: "STRING_VALUE",
 *       N: "STRING_VALUE",
 *       B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       SS: [ // StringSetAttributeValue
 *         "STRING_VALUE",
 *       ],
 *       NS: [ // NumberSetAttributeValue
 *         "STRING_VALUE",
 *       ],
 *       BS: [ // BinarySetAttributeValue
 *         new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       ],
 *       M: { // MapAttributeValue
 *         "<keys>": {//  Union: only one key present
 *           S: "STRING_VALUE",
 *           N: "STRING_VALUE",
 *           B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           SS: [
 *             "STRING_VALUE",
 *           ],
 *           NS: [
 *             "STRING_VALUE",
 *           ],
 *           BS: [
 *             new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           ],
 *           M: {
 *             "<keys>": "<AttributeValue>",
 *           },
 *           L: [ // ListAttributeValue
 *             "<AttributeValue>",
 *           ],
 *           NULL: true || false,
 *           BOOL: true || false,
 *         },
 *       },
 *       L: [
 *         "<AttributeValue>",
 *       ],
 *       NULL: true || false,
 *       BOOL: true || false,
 *     },
 *   },
 *   ProjectionExpression: "STRING_VALUE",
 *   SearchVector: [ // SearchVectorList // required
 *     "<AttributeValue>",
 *   ],
 *   SearchConditionExpression: "STRING_VALUE",
 *   TopK: Number("int"), // required
 * };
 * const command = new SearchVectorsCommand(input);
 * const response = await client.send(command);
 * // { // SearchVectorsOutput
 * //   ConsumedCapacity: { // VectorCapacity
 * //     VectorSearchRequestBytes: Number("double"),
 * //     VectorWriteRequestBytes: Number("double"),
 * //   },
 * //   SearchResults: [ // SearchResultList
 * //     { // SearchResultItem
 * //       Item: { // AttributeMap
 * //         "<keys>": { // AttributeValue Union: only one key present
 * //           S: "STRING_VALUE",
 * //           N: "STRING_VALUE",
 * //           B: new Uint8Array(),
 * //           SS: [ // StringSetAttributeValue
 * //             "STRING_VALUE",
 * //           ],
 * //           NS: [ // NumberSetAttributeValue
 * //             "STRING_VALUE",
 * //           ],
 * //           BS: [ // BinarySetAttributeValue
 * //             new Uint8Array(),
 * //           ],
 * //           M: { // MapAttributeValue
 * //             "<keys>": {//  Union: only one key present
 * //               S: "STRING_VALUE",
 * //               N: "STRING_VALUE",
 * //               B: new Uint8Array(),
 * //               SS: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NS: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               BS: [
 * //                 new Uint8Array(),
 * //               ],
 * //               M: {
 * //                 "<keys>": "<AttributeValue>",
 * //               },
 * //               L: [ // ListAttributeValue
 * //                 "<AttributeValue>",
 * //               ],
 * //               NULL: true || false,
 * //               BOOL: true || false,
 * //             },
 * //           },
 * //           L: [
 * //             "<AttributeValue>",
 * //           ],
 * //           NULL: true || false,
 * //           BOOL: true || false,
 * //         },
 * //       },
 * //       Score: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchVectorsCommandInput - {@link SearchVectorsCommandInput}
 * @returns {@link SearchVectorsCommandOutput}
 * @see {@link SearchVectorsCommandInput} for command's `input` shape.
 * @see {@link SearchVectorsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>Throughput exceeds the current throughput quota for your account. For detailed
 *             information about why the request was throttled and the ARN of the impacted resource,
 *             find the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> field in the returned exception. Contact <a href="https://aws.amazon.com/support">Amazon Web Services Support</a> to request a quota
 *             increase.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For detailed information about why
 *             the request was throttled and the ARN of the impacted resource, find the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> field in the returned exception.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @example To search for similar vectors
 * ```javascript
 * // This example searches the Products table for the top 3 items most similar to a provided vector, using the 'cosine-product-idx' vector index. The SearchConditionExpression filters results to the 'Electronics' category. The operation returns only the ProductName and Price attributes.
 * const input = {
 *   ExpressionAttributeValues: {
 *     :cat: {
 *       S: "Electronics"
 *     }
 *   },
 *   IndexName: "cosine-product-idx",
 *   ProjectionExpression: "ProductName, Price",
 *   ReturnConsumedCapacity: "INDEXES",
 *   SearchConditionExpression: "Category = :cat",
 *   SearchVector: [
 *     {
 *       N: "0.12"
 *     },
 *     {
 *       N: "0.85"
 *     },
 *     {
 *       N: "0.44"
 *     },
 *     {
 *       N: "0.67"
 *     }
 *   ],
 *   TableName: "Products",
 *   TopK: 3
 * };
 * const command = new SearchVectorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConsumedCapacity: {
 *     VectorSearchRequestBytes: 1024
 *   },
 *   SearchResults: [
 *     {
 *       Item: {
 *         Price: {
 *           N: "79.99"
 *         },
 *         ProductName: {
 *           S: "Wireless Headphones"
 *         }
 *       },
 *       Score: 0.95
 *     },
 *     {
 *       Item: {
 *         Price: {
 *           N: "49.99"
 *         },
 *         ProductName: {
 *           S: "Bluetooth Speaker"
 *         }
 *       },
 *       Score: 0.87
 *     },
 *     {
 *       Item: {
 *         Price: {
 *           N: "34.99"
 *         },
 *         ProductName: {
 *           S: "USB-C Hub"
 *         }
 *       },
 *       Score: 0.82
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchVectorsCommand extends command<SearchVectorsCommandInput, SearchVectorsCommandOutput>(
  _ep11,
  _mw0,
  "SearchVectors",
  SearchVectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchVectorsInput;
      output: SearchVectorsOutput;
    };
    sdk: {
      input: SearchVectorsCommandInput;
      output: SearchVectorsCommandOutput;
    };
  };
}
