import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Temporary credentials with authorization to log on to an Amazon Redshift database. </p>
 */
export interface GetClusterCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A database user name that is authorized to log on to the database <code>DbName</code> using the password <code>DbPassword</code>. If the specified DbUser exists in the database, the new user name has the same database privileges as the the user named in DbUser. By default, the user is added to PUBLIC. If the <code>DbGroups</code> parameter is specifed, <code>DbUser</code> is added to the listed groups for any sessions created using these credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>A temporary password that authorizes the user name returned by <code>DbUser</code> to log on to the database <code>DbName</code>. </p>
   */
  DbPassword?: string;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   */
  Expiration?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
