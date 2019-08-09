import { _UnmarshalledSecurityProfileTarget } from "./_SecurityProfileTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTargetsForSecurityProfileOutput shape
 */
export interface ListTargetsForSecurityProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: Array<_UnmarshalledSecurityProfileTarget>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
