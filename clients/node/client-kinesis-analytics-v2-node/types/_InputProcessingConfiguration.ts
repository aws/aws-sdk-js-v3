import {
  _InputLambdaProcessor,
  _UnmarshalledInputLambdaProcessor
} from "./_InputLambdaProcessor";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface _InputProcessingConfiguration {
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: _InputLambdaProcessor;
}

export interface _UnmarshalledInputProcessingConfiguration
  extends _InputProcessingConfiguration {
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: _UnmarshalledInputLambdaProcessor;
}
