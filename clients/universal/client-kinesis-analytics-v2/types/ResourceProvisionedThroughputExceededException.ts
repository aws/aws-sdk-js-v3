import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Discovery failed to get a record from the streaming source because of the Amazon Kinesis Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 */
export interface ResourceProvisionedThroughputExceededException
  extends __ServiceException__<
    _ResourceProvisionedThroughputExceededExceptionDetails
  > {
  name: "ResourceProvisionedThroughputExceededException";
}

export interface _ResourceProvisionedThroughputExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
