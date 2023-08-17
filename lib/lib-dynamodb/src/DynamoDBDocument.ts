// smithy-typescript generated code
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import { BatchGetCommand, BatchGetCommandInput, BatchGetCommandOutput } from "./commands/BatchGetCommand";
import { BatchWriteCommand, BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import { DeleteCommand, DeleteCommandInput, DeleteCommandOutput } from "./commands/DeleteCommand";
import {
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "./commands/ExecuteStatementCommand";
import {
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
} from "./commands/ExecuteTransactionCommand";
import { GetCommand, GetCommandInput, GetCommandOutput } from "./commands/GetCommand";
import { PutCommand, PutCommandInput, PutCommandOutput } from "./commands/PutCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import { TransactGetCommand, TransactGetCommandInput, TransactGetCommandOutput } from "./commands/TransactGetCommand";
import {
  TransactWriteCommand,
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
} from "./commands/TransactWriteCommand";
import { UpdateCommand, UpdateCommandInput, UpdateCommandOutput } from "./commands/UpdateCommand";
import { DynamoDBDocumentClient, TranslateConfig } from "./DynamoDBDocumentClient";

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
 */
export class DynamoDBDocument extends DynamoDBDocumentClient {
  static from(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    return new DynamoDBDocument(client, translateConfig);
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * BatchExecuteStatementCommand operation from {@link @aws-sdk/client-dynamodb#BatchExecuteStatementCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchExecuteStatementCommandOutput>;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): Promise<BatchExecuteStatementCommandOutput> | void {
    const command = new BatchExecuteStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * BatchGetItemCommand operation from {@link @aws-sdk/client-dynamodb#BatchGetItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public batchGet(args: BatchGetCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetCommandOutput>;
  public batchGet(args: BatchGetCommandInput, cb: (err: any, data?: BatchGetCommandOutput) => void): void;
  public batchGet(
    args: BatchGetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCommandOutput) => void
  ): void;
  public batchGet(
    args: BatchGetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCommandOutput) => void
  ): Promise<BatchGetCommandOutput> | void {
    const command = new BatchGetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * BatchWriteItemCommand operation from {@link @aws-sdk/client-dynamodb#BatchWriteItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public batchWrite(args: BatchWriteCommandInput, options?: __HttpHandlerOptions): Promise<BatchWriteCommandOutput>;
  public batchWrite(args: BatchWriteCommandInput, cb: (err: any, data?: BatchWriteCommandOutput) => void): void;
  public batchWrite(
    args: BatchWriteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteCommandOutput) => void
  ): void;
  public batchWrite(
    args: BatchWriteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchWriteCommandOutput) => void),
    cb?: (err: any, data?: BatchWriteCommandOutput) => void
  ): Promise<BatchWriteCommandOutput> | void {
    const command = new BatchWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * DeleteItemCommand operation from {@link @aws-sdk/client-dynamodb#DeleteItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public delete(args: DeleteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCommandOutput>;
  public delete(args: DeleteCommandInput, cb: (err: any, data?: DeleteCommandOutput) => void): void;
  public delete(
    args: DeleteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommandOutput) => void
  ): void;
  public delete(
    args: DeleteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCommandOutput) => void),
    cb?: (err: any, data?: DeleteCommandOutput) => void
  ): Promise<DeleteCommandOutput> | void {
    const command = new DeleteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * ExecuteStatementCommand operation from {@link @aws-sdk/client-dynamodb#ExecuteStatementCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteStatementCommandOutput>;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): Promise<ExecuteStatementCommandOutput> | void {
    const command = new ExecuteStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * ExecuteTransactionCommand operation from {@link @aws-sdk/client-dynamodb#ExecuteTransactionCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteTransactionCommandOutput>;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteTransactionCommandOutput) => void),
    cb?: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): Promise<ExecuteTransactionCommandOutput> | void {
    const command = new ExecuteTransactionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * GetItemCommand operation from {@link @aws-sdk/client-dynamodb#GetItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public get(args: GetCommandInput, options?: __HttpHandlerOptions): Promise<GetCommandOutput>;
  public get(args: GetCommandInput, cb: (err: any, data?: GetCommandOutput) => void): void;
  public get(
    args: GetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommandOutput) => void
  ): void;
  public get(
    args: GetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommandOutput) => void),
    cb?: (err: any, data?: GetCommandOutput) => void
  ): Promise<GetCommandOutput> | void {
    const command = new GetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * PutItemCommand operation from {@link @aws-sdk/client-dynamodb#PutItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public put(args: PutCommandInput, options?: __HttpHandlerOptions): Promise<PutCommandOutput>;
  public put(args: PutCommandInput, cb: (err: any, data?: PutCommandOutput) => void): void;
  public put(
    args: PutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCommandOutput) => void
  ): void;
  public put(
    args: PutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCommandOutput) => void),
    cb?: (err: any, data?: PutCommandOutput) => void
  ): Promise<PutCommandOutput> | void {
    const command = new PutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * QueryCommand operation from {@link @aws-sdk/client-dynamodb#QueryCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  public query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
  public query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  public query(
    args: QueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryCommandOutput) => void),
    cb?: (err: any, data?: QueryCommandOutput) => void
  ): Promise<QueryCommandOutput> | void {
    const command = new QueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * ScanCommand operation from {@link @aws-sdk/client-dynamodb#ScanCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public scan(args: ScanCommandInput, options?: __HttpHandlerOptions): Promise<ScanCommandOutput>;
  public scan(args: ScanCommandInput, cb: (err: any, data?: ScanCommandOutput) => void): void;
  public scan(
    args: ScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanCommandOutput) => void
  ): void;
  public scan(
    args: ScanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ScanCommandOutput) => void),
    cb?: (err: any, data?: ScanCommandOutput) => void
  ): Promise<ScanCommandOutput> | void {
    const command = new ScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * TransactGetItemsCommand operation from {@link @aws-sdk/client-dynamodb#TransactGetItemsCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public transactGet(args: TransactGetCommandInput, options?: __HttpHandlerOptions): Promise<TransactGetCommandOutput>;
  public transactGet(args: TransactGetCommandInput, cb: (err: any, data?: TransactGetCommandOutput) => void): void;
  public transactGet(
    args: TransactGetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactGetCommandOutput) => void
  ): void;
  public transactGet(
    args: TransactGetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransactGetCommandOutput) => void),
    cb?: (err: any, data?: TransactGetCommandOutput) => void
  ): Promise<TransactGetCommandOutput> | void {
    const command = new TransactGetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * TransactWriteItemsCommand operation from {@link @aws-sdk/client-dynamodb#TransactWriteItemsCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public transactWrite(
    args: TransactWriteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransactWriteCommandOutput>;
  public transactWrite(
    args: TransactWriteCommandInput,
    cb: (err: any, data?: TransactWriteCommandOutput) => void
  ): void;
  public transactWrite(
    args: TransactWriteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactWriteCommandOutput) => void
  ): void;
  public transactWrite(
    args: TransactWriteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransactWriteCommandOutput) => void),
    cb?: (err: any, data?: TransactWriteCommandOutput) => void
  ): Promise<TransactWriteCommandOutput> | void {
    const command = new TransactWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Accepts native JavaScript types instead of `AttributeValue`s, and calls
   * UpdateItemCommand operation from {@link @aws-sdk/client-dynamodb#UpdateItemCommand}.
   *
   * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
   * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
   */
  public update(args: UpdateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCommandOutput>;
  public update(args: UpdateCommandInput, cb: (err: any, data?: UpdateCommandOutput) => void): void;
  public update(
    args: UpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCommandOutput) => void
  ): void;
  public update(
    args: UpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCommandOutput) => void),
    cb?: (err: any, data?: UpdateCommandOutput) => void
  ): Promise<UpdateCommandOutput> | void {
    const command = new UpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
