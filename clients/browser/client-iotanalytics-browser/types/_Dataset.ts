import { _DatasetAction, _UnmarshalledDatasetAction } from "./_DatasetAction";
import {
  _DatasetTrigger,
  _UnmarshalledDatasetTrigger
} from "./_DatasetTrigger";
import {
  _DatasetContentDeliveryRule,
  _UnmarshalledDatasetContentDeliveryRule
} from "./_DatasetContentDeliveryRule";
import {
  _RetentionPeriod,
  _UnmarshalledRetentionPeriod
} from "./_RetentionPeriod";
import {
  _VersioningConfiguration,
  _UnmarshalledVersioningConfiguration
} from "./_VersioningConfiguration";

/**
 * <p>Information about a data set.</p>
 */
export interface _Dataset {
  /**
   * <p>The name of the data set.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the data set.</p>
   */
  arn?: string;

  /**
   * <p>The "DatasetAction" objects that automatically create the data set contents.</p>
   */
  actions?: Array<_DatasetAction> | Iterable<_DatasetAction>;

  /**
   * <p>The "DatasetTrigger" objects that specify when the data set is automatically updated.</p>
   */
  triggers?: Array<_DatasetTrigger> | Iterable<_DatasetTrigger>;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?:
    | Array<_DatasetContentDeliveryRule>
    | Iterable<_DatasetContentDeliveryRule>;

  /**
   * <p>The status of the data set.</p>
   */
  status?: "CREATING" | "ACTIVE" | "DELETING" | string;

  /**
   * <p>When the data set was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p>[Optional] How long, in days, message data is kept for the data set.</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: _VersioningConfiguration;
}

export interface _UnmarshalledDataset extends _Dataset {
  /**
   * <p>The "DatasetAction" objects that automatically create the data set contents.</p>
   */
  actions?: Array<_UnmarshalledDatasetAction>;

  /**
   * <p>The "DatasetTrigger" objects that specify when the data set is automatically updated.</p>
   */
  triggers?: Array<_UnmarshalledDatasetTrigger>;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?: Array<_UnmarshalledDatasetContentDeliveryRule>;

  /**
   * <p>When the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>[Optional] How long, in days, message data is kept for the data set.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: _UnmarshalledVersioningConfiguration;
}
