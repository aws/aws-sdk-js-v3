/**
 * <p>Information about the location of application artifacts stored in Amazon S3.</p>
 */
export interface _S3Location {
  /**
   * <p>The name of the Amazon S3 bucket where the application revision is stored.</p>
   */
  bucket?: string;

  /**
   * <p>The name of the Amazon S3 object that represents the bundled artifacts for the application revision.</p>
   */
  key?: string;

  /**
   * <p>The file type of the application revision. Must be one of the following:</p> <ul> <li> <p>tar: A tar archive file.</p> </li> <li> <p>tgz: A compressed tar archive file.</p> </li> <li> <p>zip: A zip archive file.</p> </li> </ul>
   */
  bundleType?: "tar" | "tgz" | "zip" | "YAML" | "JSON" | string;

  /**
   * <p>A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the version is not specified, the system uses the most recent version by default.</p>
   */
  version?: string;

  /**
   * <p>The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the ETag is not specified as an input parameter, ETag validation of the object is skipped.</p>
   */
  eTag?: string;
}

export type _UnmarshalledS3Location = _S3Location;
