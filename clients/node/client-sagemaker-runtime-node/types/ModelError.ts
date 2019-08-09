import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Model (owned by the customer in the container) returned an error 500. </p>
 */
export interface ModelError extends __ServiceException__<_ModelErrorDetails> {
  name: "ModelError";
}

export interface _ModelErrorDetails {
  /**
   * _Message shape
   */
  Message?: string;

  /**
   * <p> Original status code. </p>
   */
  OriginalStatusCode?: number;

  /**
   * <p> Original message. </p>
   */
  OriginalMessage?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   */
  LogStreamArn?: string;
}
