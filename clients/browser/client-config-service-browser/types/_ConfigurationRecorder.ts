import {
  _RecordingGroup,
  _UnmarshalledRecordingGroup
} from "./_RecordingGroup";

/**
 * <p>An object that represents the recording of configuration changes of an AWS resource.</p>
 */
export interface _ConfigurationRecorder {
  /**
   * <p>The name of the recorder. By default, AWS Config automatically assigns the name "default" when creating the configuration recorder. You cannot change the assigned name.</p>
   */
  name?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role used to describe the AWS resources associated with the account.</p>
   */
  roleARN?: string;

  /**
   * <p>Specifies the types of AWS resources for which AWS Config records configuration changes.</p>
   */
  recordingGroup?: _RecordingGroup;
}

export interface _UnmarshalledConfigurationRecorder
  extends _ConfigurationRecorder {
  /**
   * <p>Specifies the types of AWS resources for which AWS Config records configuration changes.</p>
   */
  recordingGroup?: _UnmarshalledRecordingGroup;
}
