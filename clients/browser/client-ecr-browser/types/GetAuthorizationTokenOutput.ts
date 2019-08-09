import { _UnmarshalledAuthorizationData } from "./_AuthorizationData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAuthorizationTokenOutput shape
 */
export interface GetAuthorizationTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of authorization token data objects that correspond to the <code>registryIds</code> values in the request.</p>
   */
  authorizationData?: Array<_UnmarshalledAuthorizationData>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
