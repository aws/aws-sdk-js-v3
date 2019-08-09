import { _UnmarshalledConfigurationRevision } from "./_ConfigurationRevision";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConfigurationRevisionsOutput shape
 */
export interface ListConfigurationRevisionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>Paginated results marker.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *             <p>List of ConfigurationRevision objects.</p>
   *
   */
  Revisions?: Array<_UnmarshalledConfigurationRevision>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
