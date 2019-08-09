import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
 */
export interface CloudTrailARNInvalidException
  extends __ServiceException__<_CloudTrailARNInvalidExceptionDetails> {
  name: "CloudTrailARNInvalidException";
}

export interface _CloudTrailARNInvalidExceptionDetails {}
