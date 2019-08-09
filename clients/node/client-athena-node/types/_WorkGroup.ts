import {
  _WorkGroupConfiguration,
  _UnmarshalledWorkGroupConfiguration
} from "./_WorkGroupConfiguration";

/**
 * <p>A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 */
export interface _WorkGroup {
  /**
   * <p>The workgroup name.</p>
   */
  Name: string;

  /**
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption configuration, if any, used for query results; whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup settings override client-side settings; and the data usage limit for the amount of data scanned per query, if it is specified. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: _WorkGroupConfiguration;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date | string | number;
}

export interface _UnmarshalledWorkGroup extends _WorkGroup {
  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption configuration, if any, used for query results; whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup settings override client-side settings; and the data usage limit for the amount of data scanned per query, if it is specified. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: _UnmarshalledWorkGroupConfiguration;

  /**
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date;
}
