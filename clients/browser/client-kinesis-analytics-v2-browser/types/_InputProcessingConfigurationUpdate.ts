import {
  _InputLambdaProcessorUpdate,
  _UnmarshalledInputLambdaProcessorUpdate
} from "./_InputLambdaProcessorUpdate";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 */
export interface _InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: _InputLambdaProcessorUpdate;
}

export interface _UnmarshalledInputProcessingConfigurationUpdate
  extends _InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: _UnmarshalledInputLambdaProcessorUpdate;
}
