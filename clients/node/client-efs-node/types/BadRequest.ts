import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 */
export interface BadRequest extends __ServiceException__<_BadRequestDetails> {
  name: "BadRequest";
}

export interface _BadRequestDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
