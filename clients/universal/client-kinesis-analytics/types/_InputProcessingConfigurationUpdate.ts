import {
  _InputLambdaProcessorUpdate,
  _UnmarshalledInputLambdaProcessorUpdate
} from "./_InputLambdaProcessorUpdate";

/**
 * <p>Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. </p>
 */
export interface _InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: _InputLambdaProcessorUpdate;
}

export interface _UnmarshalledInputProcessingConfigurationUpdate
  extends _InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: _UnmarshalledInputLambdaProcessorUpdate;
}
