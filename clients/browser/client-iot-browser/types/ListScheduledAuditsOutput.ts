import { _UnmarshalledScheduledAuditMetadata } from "./_ScheduledAuditMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListScheduledAuditsOutput shape
 */
export interface ListScheduledAuditsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: Array<_UnmarshalledScheduledAuditMetadata>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
