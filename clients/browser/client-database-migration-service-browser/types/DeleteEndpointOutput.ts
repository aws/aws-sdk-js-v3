import { _UnmarshalledEndpoint } from "./_Endpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DeleteEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The endpoint that was deleted.</p>
   */
  Endpoint?: _UnmarshalledEndpoint;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
