import {
  _InputLambdaProcessorDescription,
  _UnmarshalledInputLambdaProcessorDescription
} from "./_InputLambdaProcessorDescription";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface _InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a> </p>
   */
  InputLambdaProcessorDescription?: _InputLambdaProcessorDescription;
}

export interface _UnmarshalledInputProcessingConfigurationDescription
  extends _InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a> </p>
   */
  InputLambdaProcessorDescription?: _UnmarshalledInputLambdaProcessorDescription;
}
