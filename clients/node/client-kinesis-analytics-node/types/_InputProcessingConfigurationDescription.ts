import {
  _InputLambdaProcessorDescription,
  _UnmarshalledInputLambdaProcessorDescription
} from "./_InputLambdaProcessorDescription";

/**
 * <p>Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 */
export interface _InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   */
  InputLambdaProcessorDescription?: _InputLambdaProcessorDescription;
}

export interface _UnmarshalledInputProcessingConfigurationDescription
  extends _InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   */
  InputLambdaProcessorDescription?: _UnmarshalledInputLambdaProcessorDescription;
}
