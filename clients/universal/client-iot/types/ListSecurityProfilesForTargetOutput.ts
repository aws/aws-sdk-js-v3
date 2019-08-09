import { _UnmarshalledSecurityProfileTargetMapping } from "./_SecurityProfileTargetMapping";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSecurityProfilesForTargetOutput shape
 */
export interface ListSecurityProfilesForTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: Array<
    _UnmarshalledSecurityProfileTargetMapping
  >;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
