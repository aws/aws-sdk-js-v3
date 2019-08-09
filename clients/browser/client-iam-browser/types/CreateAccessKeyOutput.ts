import { _UnmarshalledAccessKey } from "./_AccessKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateAccessKey</a> request. </p>
 */
export interface CreateAccessKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure with details about the access key.</p>
   */
  AccessKey: _UnmarshalledAccessKey;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
