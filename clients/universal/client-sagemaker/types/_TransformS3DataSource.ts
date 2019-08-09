/**
 * <p>Describes the S3 data source.</p>
 */
export interface _TransformS3DataSource {
  /**
   * <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for batch transform. </p> <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch transform. </p> <p>The following values are compatible: <code>ManifestFile</code>, <code>S3Prefix</code> </p> <p>The following value is not compatible: <code>AugmentedManifestFile</code> </p>
   */
  S3DataType: "ManifestFile" | "S3Prefix" | "AugmentedManifestFile" | string;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a key name prefix or a manifest. For example:</p> <ul> <li> <p> A key name prefix might look like this: <code>s3://bucketname/exampleprefix</code>. </p> </li> <li> <p> A manifest might look like this: <code>s3://bucketname/example.manifest</code> </p> <p> The manifest is an S3 object which is a JSON file with the following format: </p> <p> <code>[</code> </p> <p> <code> {"prefix": "s3://customer_bucket/some/prefix/"},</code> </p> <p> <code> "relative/path/to/custdata-1",</code> </p> <p> <code> "relative/path/custdata-2",</code> </p> <p> <code> ...</code> </p> <p> <code> ]</code> </p> <p> The preceding JSON matches the following <code>S3Uris</code>: </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code> </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/custdata-1</code> </p> <p> <code>...</code> </p> <p> The complete set of <code>S3Uris</code> in this manifest constitutes the input data for the channel for this datasource. The object that each <code>S3Uris</code> points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.</p> </li> </ul>
   */
  S3Uri: string;
}

export type _UnmarshalledTransformS3DataSource = _TransformS3DataSource;
