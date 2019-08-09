import { _UnmarshalledApplicationInfo } from "./_ApplicationInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a GetApplication operation.</p>
 */
export interface GetApplicationOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the application.</p>
   */
  application?: _UnmarshalledApplicationInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
