import {
  _EncryptionConfiguration,
  _UnmarshalledEncryptionConfiguration
} from "./_EncryptionConfiguration";

/**
 * <p>The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.</p>
 */
export interface _ResultConfiguration {
  /**
   * <p>The location in Amazon S3 where your query results are stored, such as <code>s3://path/to/query/bucket/</code>. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Queries and Query Result Files.</a> If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup. The "workgroup settings override" is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledResultConfiguration extends _ResultConfiguration {
  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}
