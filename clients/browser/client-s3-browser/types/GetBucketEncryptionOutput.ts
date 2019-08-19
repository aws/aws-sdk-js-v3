import { _UnmarshalledServerSideEncryptionConfiguration } from "./_ServerSideEncryptionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketEncryptionOutput shape
 */
export interface GetBucketEncryptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  ServerSideEncryptionConfiguration?: _UnmarshalledServerSideEncryptionConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
