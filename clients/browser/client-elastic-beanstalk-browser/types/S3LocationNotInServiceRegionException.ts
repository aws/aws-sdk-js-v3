import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified S3 bucket does not belong to the S3 region in which the service is running. The following regions are supported:</p> <ul> <li> <p>IAD/us-east-1</p> </li> <li> <p>PDX/us-west-2</p> </li> <li> <p>DUB/eu-west-1</p> </li> </ul>
 */
export interface S3LocationNotInServiceRegionException
  extends __ServiceException__<_S3LocationNotInServiceRegionExceptionDetails> {
  name: "S3LocationNotInServiceRegionException";
}

export interface _S3LocationNotInServiceRegionExceptionDetails {}
