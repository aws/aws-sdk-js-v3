import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
 */
export interface PreconditionFailedException
  extends __ServiceException__<_PreconditionFailedExceptionDetails> {
  name: "PreconditionFailedException";
}

export interface _PreconditionFailedExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
