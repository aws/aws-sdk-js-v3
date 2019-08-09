import { _UnmarshalledFailedWorkspaceChangeRequest } from "./_FailedWorkspaceChangeRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RebuildWorkspacesOutput shape
 */
export interface RebuildWorkspacesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: Array<_UnmarshalledFailedWorkspaceChangeRequest>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
