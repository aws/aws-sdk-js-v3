import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The stream version that you specified is not the latest version. To get the latest version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a> API.</p>
 */
export interface VersionMismatchException
  extends __ServiceException__<_VersionMismatchExceptionDetails> {
  name: "VersionMismatchException";
}

export interface _VersionMismatchExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
