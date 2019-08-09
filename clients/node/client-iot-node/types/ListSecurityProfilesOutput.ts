import { _UnmarshalledSecurityProfileIdentifier } from "./_SecurityProfileIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSecurityProfilesOutput shape
 */
export interface ListSecurityProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: Array<_UnmarshalledSecurityProfileIdentifier>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
