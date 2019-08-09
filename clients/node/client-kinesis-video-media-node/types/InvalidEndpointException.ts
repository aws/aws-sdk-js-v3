import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving such an exception, the user must call <code>GetDataEndpoint</code> with <code>AccessMode</code> set to "READ" and use the endpoint Kinesis Video returns in the next <code>GetMedia</code> call. </p>
 */
export interface InvalidEndpointException
  extends __ServiceException__<_InvalidEndpointExceptionDetails> {
  name: "InvalidEndpointException";
}

export interface _InvalidEndpointExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
