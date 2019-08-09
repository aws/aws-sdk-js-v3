import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for the given streaming source.</p>
 */
export interface UnableToDetectSchemaException
  extends __ServiceException__<_UnableToDetectSchemaExceptionDetails> {
  name: "UnableToDetectSchemaException";
}

export interface _UnableToDetectSchemaExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;

  /**
   * _RawInputRecords shape
   */
  RawInputRecords?: Array<string>;

  /**
   * _ProcessedInputRecords shape
   */
  ProcessedInputRecords?: Array<string>;
}
