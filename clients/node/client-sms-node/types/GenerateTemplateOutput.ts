import { _UnmarshalledS3Location } from "./_S3Location";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GenerateTemplateOutput shape
 */
export interface GenerateTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Location of the Amazon S3 object.</p>
   */
  s3Location?: _UnmarshalledS3Location;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
