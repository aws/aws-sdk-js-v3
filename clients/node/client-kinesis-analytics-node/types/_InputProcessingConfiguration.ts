import {
  _InputLambdaProcessor,
  _UnmarshalledInputLambdaProcessor
} from "./_InputLambdaProcessor";

/**
 * <p>Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 */
export interface _InputProcessingConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: _InputLambdaProcessor;
}

export interface _UnmarshalledInputProcessingConfiguration
  extends _InputProcessingConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: _UnmarshalledInputLambdaProcessor;
}
