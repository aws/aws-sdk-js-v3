import { _UnmarshalledAwsCredentials } from "./_AwsCredentials";
import { _UnmarshalledS3Location } from "./_S3Location";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface RequestUploadCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>AWS credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for.</p>
   */
  UploadCredentials?: _UnmarshalledAwsCredentials;

  /**
   * <p>Amazon S3 path and key, identifying where the game build files are stored.</p>
   */
  StorageLocation?: _UnmarshalledS3Location;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
