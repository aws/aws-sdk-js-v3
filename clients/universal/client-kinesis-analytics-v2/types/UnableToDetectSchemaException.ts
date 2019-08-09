import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The data format is not valid. Amazon Kinesis Data Analytics cannot detect the schema for the given streaming source.</p>
 */
export interface UnableToDetectSchemaException
  extends __ServiceException__<_UnableToDetectSchemaExceptionDetails> {
  name: "UnableToDetectSchemaException";
}

export interface _UnableToDetectSchemaExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: Array<string>;

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter. </p>
   */
  ProcessedInputRecords?: Array<string>;
}
