import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for BadGatewayException
 */
export interface BadGatewayException
  extends __ServiceException__<_BadGatewayExceptionDetails> {
  name: "BadGatewayException";
}

export interface _BadGatewayExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
