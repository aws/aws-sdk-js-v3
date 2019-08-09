import { _UnmarshalledAccountModification } from "./_AccountModification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountModificationsOutput shape
 */
export interface DescribeAccountModificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: Array<_UnmarshalledAccountModification>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
