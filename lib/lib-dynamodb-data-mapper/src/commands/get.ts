import { HttpHandlerOptions } from "@smithy/types";
import { ModelConstructor } from "../schema";

/**
 * Input for a get operation.
 */
export interface GetCommandInput<D extends object, T extends D> {
  /**
   * The primary key to retrieve.
   */
  key: Partial<D>;

  /**
   * The model class with schema metadata on prototype.
   */
  model: ModelConstructor<D>;

  /**
   * Optional factory to convert raw data to a custom type.
   */
  factory?: (data: D) => T;

  /**
   * Optional HTTP handler options.
   */
  options?: HttpHandlerOptions;
}

/**
 * Output from a get operation
 */
export type GetCommandOutput<T> = T | undefined;

export function isGetCommandInput<D extends object, T extends D>(
  arg: unknown
): arg is GetCommandInput<D, T> {
  if (typeof arg !== "object" || arg === null) return false;
  const input = arg as Partial<GetCommandInput<D, T>>;
  return (
    typeof input.key === "object" &&
    input.key !== null &&
    typeof input.model === "function"
  );
}