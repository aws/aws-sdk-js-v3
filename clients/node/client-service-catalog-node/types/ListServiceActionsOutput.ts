import { _UnmarshalledServiceActionSummary } from "./_ServiceActionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServiceActionsOutput shape
 */
export interface ListServiceActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the service actions associated with the provisioning artifact.</p>
   */
  ServiceActionSummaries?: Array<_UnmarshalledServiceActionSummary>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
