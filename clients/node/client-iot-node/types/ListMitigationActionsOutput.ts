import { _UnmarshalledMitigationActionIdentifier } from "./_MitigationActionIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMitigationActionsOutput shape
 */
export interface ListMitigationActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   */
  actionIdentifiers?: Array<_UnmarshalledMitigationActionIdentifier>;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
