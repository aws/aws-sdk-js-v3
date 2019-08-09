import { _UnmarshalledAppSummary } from "./_AppSummary";
import { _UnmarshalledServerGroup } from "./_ServerGroup";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAppOutput shape
 */
export interface UpdateAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary description of the application.</p>
   */
  appSummary?: _UnmarshalledAppSummary;

  /**
   * <p>List of updated server groups in the application.</p>
   */
  serverGroups?: Array<_UnmarshalledServerGroup>;

  /**
   * <p>List of tags associated with the application.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
