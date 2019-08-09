import {
  _ResultConfigurationUpdates,
  _UnmarshalledResultConfigurationUpdates
} from "./_ResultConfigurationUpdates";

/**
 * <p>The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.</p>
 */
export interface _WorkGroupConfigurationUpdates {
  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.</p>
   */
  ResultConfigurationUpdates?: _ResultConfigurationUpdates;

  /**
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a> </p>
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;
}

export interface _UnmarshalledWorkGroupConfigurationUpdates
  extends _WorkGroupConfigurationUpdates {
  /**
   * <p>The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.</p>
   */
  ResultConfigurationUpdates?: _UnmarshalledResultConfigurationUpdates;
}
