import { _DatasetAction } from "./_DatasetAction";
import { _DatasetTrigger } from "./_DatasetTrigger";
import { _DatasetContentDeliveryRule } from "./_DatasetContentDeliveryRule";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetInput shape
 */
export interface CreateDatasetInput {
  /**
   * <p>The name of the data set.</p>
   */
  datasetName: string;

  /**
   * <p>A list of actions that create the data set contents.</p>
   */
  actions: Array<_DatasetAction> | Iterable<_DatasetAction>;

  /**
   * <p>A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <b>DataSetTrigger</b> objects.</p>
   */
  triggers?: Array<_DatasetTrigger> | Iterable<_DatasetTrigger>;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?:
    | Array<_DatasetContentDeliveryRule>
    | Iterable<_DatasetContentDeliveryRule>;

  /**
   * <p>[Optional] How long, in days, versions of data set contents are kept for the data set. If not specified or set to null, versions of data set contents are retained for at most 90 days. The number of versions of data set contents retained is determined by the <code>versioningConfiguration</code> parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: _VersioningConfiguration;

  /**
   * <p>Metadata which can be used to manage the data set.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
