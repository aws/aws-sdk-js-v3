import { _UnmarshalledCommand } from "./_Command";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This output contains the bootstrap actions detail.</p>
 */
export interface ListBootstrapActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The bootstrap actions associated with the cluster.</p>
   */
  BootstrapActions?: Array<_UnmarshalledCommand>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
