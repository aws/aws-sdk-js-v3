// smithy-typescript generated code
import type {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes as __ServiceInputTypes,
  ServiceOutputTypes as __ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import type { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";
import { Client as __Client } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import type {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import type { BatchGetCommandInput, BatchGetCommandOutput } from "./commands/BatchGetCommand";
import type { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import type { DeleteCommandInput, DeleteCommandOutput } from "./commands/DeleteCommand";
import type { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand";
import type {
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
} from "./commands/ExecuteTransactionCommand";
import type { GetCommandInput, GetCommandOutput } from "./commands/GetCommand";
import type { PutCommandInput, PutCommandOutput } from "./commands/PutCommand";
import type { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import type { ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import type { TransactGetCommandInput, TransactGetCommandOutput } from "./commands/TransactGetCommand";
import type { TransactWriteCommandInput, TransactWriteCommandOutput } from "./commands/TransactWriteCommand";
import type { UpdateCommandInput, UpdateCommandOutput } from "./commands/UpdateCommand";

/**
 * @public
 */
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes =
  | __ServiceInputTypes
  | BatchExecuteStatementCommandInput
  | BatchGetCommandInput
  | BatchWriteCommandInput
  | DeleteCommandInput
  | ExecuteStatementCommandInput
  | ExecuteTransactionCommandInput
  | GetCommandInput
  | PutCommandInput
  | QueryCommandInput
  | ScanCommandInput
  | TransactGetCommandInput
  | TransactWriteCommandInput
  | UpdateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | __ServiceOutputTypes
  | BatchExecuteStatementCommandOutput
  | BatchGetCommandOutput
  | BatchWriteCommandOutput
  | DeleteCommandOutput
  | ExecuteStatementCommandOutput
  | ExecuteTransactionCommandOutput
  | GetCommandOutput
  | PutCommandOutput
  | QueryCommandOutput
  | ScanCommandOutput
  | TransactGetCommandOutput
  | TransactWriteCommandOutput
  | UpdateCommandOutput;

/**
 * @public
 */
export type TranslateConfig = {
  marshallOptions?: marshallOptions;
  unmarshallOptions?: unmarshallOptions;
};

/**
 * @public
 */
export type DynamoDBDocumentClientResolvedConfig = DynamoDBClientResolvedConfig & {
  translateConfig?: TranslateConfig;
};

/**
 * The document client simplifies working with items in Amazon DynamoDB by
 * abstracting away the notion of attribute values. This abstraction annotates native
 * JavaScript types supplied as input parameters, as well as converts annotated
 * response data to native JavaScript types.
 *
 * ## Marshalling Input and Unmarshalling Response Data
 *
 * The document client affords developers the use of native JavaScript types
 * instead of `AttributeValue`s to simplify the JavaScript development
 * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
 * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
 * Responses from DynamoDB are unmarshalled into plain JavaScript objects
 * by the `DocumentClient`. The `DocumentClient` does not accept
 * `AttributeValue`s in favor of native JavaScript types.
 *
 * |          JavaScript Type          | DynamoDB AttributeValue |
 * | :-------------------------------: | ----------------------- |
 * |              String               | S                       |
 * |          Number / BigInt          | N                       |
 * |              Boolean              | BOOL                    |
 * |               null                | NULL                    |
 * |               Array               | L                       |
 * |              Object               | M                       |
 * |   Set\<Uint8Array, Blob, ...\>    | BS                      |
 * |       Set\<Number, BigInt\>       | NS                      |
 * |           Set\<String\>           | SS                      |
 * | Uint8Array, Buffer, File, Blob... | B                       |
 *
 * ### Example
 *
 * Here is an example list which is sent to DynamoDB client in an operation:
 *
 * ```json
 * { "L": [{ "NULL": true }, { "BOOL": false }, { "N": 1 }, { "S": "two" }] }
 * ```
 *
 * The DynamoDB document client abstracts the attribute values as follows in
 * both input and output:
 *
 * ```json
 * [null, false, 1, "two"]
 * ```
 *
 * @see {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb | @aws-sdk/client-dynamodb}
 *
 * @public
 */
export class DynamoDBDocumentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBDocumentClientResolvedConfig
> {
  readonly config: DynamoDBDocumentClientResolvedConfig;

  protected constructor(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfig = translateConfig;
    this.middlewareStack = client.middlewareStack;
  }

  static from(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    return new DynamoDBDocumentClient(client, translateConfig);
  }

  destroy(): void {
    // A no-op, since client is passed in constructor
  }
}
