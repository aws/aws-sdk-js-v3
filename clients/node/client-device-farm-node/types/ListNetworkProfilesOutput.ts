import { _UnmarshalledNetworkProfile } from "./_NetworkProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNetworkProfilesOutput shape
 */
export interface ListNetworkProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the available network profiles.</p>
   */
  networkProfiles?: Array<_UnmarshalledNetworkProfile>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
