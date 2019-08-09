import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller reference you attempted to create the streaming distribution with is associated with another distribution</p>
 */
export interface StreamingDistributionAlreadyExists
  extends __ServiceException__<_StreamingDistributionAlreadyExistsDetails> {
  name: "StreamingDistributionAlreadyExists";
}

export interface _StreamingDistributionAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
