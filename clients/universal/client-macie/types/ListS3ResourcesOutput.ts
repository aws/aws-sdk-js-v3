import { _UnmarshalledS3ResourceClassification } from "./_S3ResourceClassification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListS3ResourcesOutput shape
 */
export interface ListS3ResourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the associated S3 resources returned by the action.</p>
   */
  s3Resources?: Array<_UnmarshalledS3ResourceClassification>;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
