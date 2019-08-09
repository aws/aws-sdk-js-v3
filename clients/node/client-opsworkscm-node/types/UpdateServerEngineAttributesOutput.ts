import { _UnmarshalledServer } from "./_Server";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServerEngineAttributesOutput shape
 */
export interface UpdateServerEngineAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the response to an <code>UpdateServerEngineAttributes</code> request. </p>
   */
  Server?: _UnmarshalledServer;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
