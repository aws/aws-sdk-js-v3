import { _UnmarshalledApplicationSummary } from "./_ApplicationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListApplicationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of <code>ApplicationSummary</code> objects. </p>
   */
  ApplicationSummaries: Array<_UnmarshalledApplicationSummary>;

  /**
   * <p>Returns true if there are more applications to retrieve.</p>
   */
  HasMoreApplications: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
