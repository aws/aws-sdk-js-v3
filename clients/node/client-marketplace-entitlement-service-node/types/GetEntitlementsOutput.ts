import { _UnmarshalledEntitlement } from "./_Entitlement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The GetEntitlementsRequest contains results from the GetEntitlements operation.</p>
 */
export interface GetEntitlementsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The set of entitlements found through the GetEntitlements operation. If the result contains an empty set of entitlements, NextToken might still be present and should be used.</p>
   */
  Entitlements?: Array<_UnmarshalledEntitlement>;

  /**
   * <p>For paginated results, use NextToken in subsequent calls to GetEntitlements. If the result contains an empty set of entitlements, NextToken might still be present and should be used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
