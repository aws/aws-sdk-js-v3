import { _UnmarshalledDelegationSet } from "./_DelegationSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.</p>
 */
export interface GetReusableDelegationSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the reusable delegation set.</p>
   */
  DelegationSet: _UnmarshalledDelegationSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
