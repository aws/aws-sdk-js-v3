import {
  _ResultConfiguration,
  _UnmarshalledResultConfiguration
} from "./_ResultConfiguration";

/**
 * <p>The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limit for the amount of data scanned per query, if it is specified. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 */
export interface _WorkGroupConfiguration {
  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.</p>
   */
  ResultConfiguration?: _ResultConfiguration;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;
}

export interface _UnmarshalledWorkGroupConfiguration
  extends _WorkGroupConfiguration {
  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.</p>
   */
  ResultConfiguration?: _UnmarshalledResultConfiguration;
}
