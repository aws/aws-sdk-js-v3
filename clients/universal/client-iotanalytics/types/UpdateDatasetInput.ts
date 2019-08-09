import { _DatasetAction } from "./_DatasetAction";
import { _DatasetTrigger } from "./_DatasetTrigger";
import { _DatasetContentDeliveryRule } from "./_DatasetContentDeliveryRule";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDatasetInput shape
 */
export interface UpdateDatasetInput {
  /**
   * <p>The name of the data set to update.</p>
   */
  datasetName: string;

  /**
   * <p>A list of "DatasetAction" objects.</p>
   */
  actions: Array<_DatasetAction> | Iterable<_DatasetAction>;

  /**
   * <p>A list of "DatasetTrigger" objects. The list can be empty or can contain up to five <b>DataSetTrigger</b> objects.</p>
   */
  triggers?: Array<_DatasetTrigger> | Iterable<_DatasetTrigger>;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?:
    | Array<_DatasetContentDeliveryRule>
    | Iterable<_DatasetContentDeliveryRule>;

  /**
   * <p>How long, in days, data set contents are kept for the data set.</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: _VersioningConfiguration;

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
