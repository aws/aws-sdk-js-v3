import { PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { HttpHandlerOptions } from "@smithy/types";

/**
 * Input for a put operation.
 */
export interface PutCommandInput<T extends object> {
  /**
   * The item to save to DynamoDB.
   */
  item: T;

  /**
   * Optional conditional criteria (excluding TableName or Item).
   */
  conditions?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">;

  /**
   * Optional HTTP handler options.
   */
  options?: HttpHandlerOptions;
}

/**
 * Output from a put operation. Always returns the item.
 */
export type PutCommandOutput<T> = T;


export const isPutCommandInput = <T extends object>(input: unknown): input is PutCommandInput<T>  =>{
  return typeof input === "object" && input !== null && "item" in input;
}
