import { _UnmarshalledBuild } from "./_Build";
import { _UnmarshalledAwsCredentials } from "./_AwsCredentials";
import { _UnmarshalledS3Location } from "./_S3Location";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreateBuildOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly created build record, including a unique build ID and status. </p>
   */
  Build?: _UnmarshalledBuild;

  /**
   * <p>This element is returned only when the operation is called without a storage location. It contains credentials to use when you are uploading a build file to an Amazon S3 bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these credentials, call <a>RequestUploadCredentials</a>. </p>
   */
  UploadCredentials?: _UnmarshalledAwsCredentials;

  /**
   * <p>Amazon S3 location for your game build file, including bucket name and key.</p>
   */
  StorageLocation?: _UnmarshalledS3Location;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
