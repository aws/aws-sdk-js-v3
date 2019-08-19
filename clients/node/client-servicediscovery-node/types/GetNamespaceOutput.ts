import { _UnmarshalledNamespace } from "./_Namespace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNamespaceOutput shape
 */
export interface GetNamespaceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the specified namespace.</p>
   */
  Namespace?: _UnmarshalledNamespace;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
