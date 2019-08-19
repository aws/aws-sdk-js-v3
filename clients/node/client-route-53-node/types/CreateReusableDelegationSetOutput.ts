import { _UnmarshalledDelegationSet } from "./_DelegationSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateReusableDelegationSetOutput shape
 */
export interface CreateReusableDelegationSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains name server information.</p>
   */
  DelegationSet: _UnmarshalledDelegationSet;

  /**
   * <p>The unique URL representing the new reusable delegation set.</p>
   */
  Location: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
