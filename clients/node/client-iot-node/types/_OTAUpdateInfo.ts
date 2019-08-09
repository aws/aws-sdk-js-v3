import {
  _AwsJobExecutionsRolloutConfig,
  _UnmarshalledAwsJobExecutionsRolloutConfig
} from "./_AwsJobExecutionsRolloutConfig";
import { _OTAUpdateFile, _UnmarshalledOTAUpdateFile } from "./_OTAUpdateFile";
import { _ErrorInfo, _UnmarshalledErrorInfo } from "./_ErrorInfo";

/**
 * <p>Information about an OTA update.</p>
 */
export interface _OTAUpdateInfo {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date | string | number;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date | string | number;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: Array<string> | Iterable<string>;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: _AwsJobExecutionsRolloutConfig;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when the thing is added to a target group, even after the OTA update was completed by all things originally in the group. </p>
   */
  targetSelection?: "CONTINUOUS" | "SNAPSHOT" | string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: Array<_OTAUpdateFile> | Iterable<_OTAUpdateFile>;

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?:
    | "CREATE_PENDING"
    | "CREATE_IN_PROGRESS"
    | "CREATE_COMPLETE"
    | "CREATE_FAILED"
    | string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: _ErrorInfo;

  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledOTAUpdateInfo extends _OTAUpdateInfo {
  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: Array<string>;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: _UnmarshalledAwsJobExecutionsRolloutConfig;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: Array<_UnmarshalledOTAUpdateFile>;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: _UnmarshalledErrorInfo;

  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: { [key: string]: string };
}
