import { _UnmarshalledBulkDeploymentResult } from "./_BulkDeploymentResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBulkDeploymentDetailedReportsOutput shape
 */
export interface ListBulkDeploymentDetailedReportsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of the individual group deployments in the bulk deployment operation.
   */
  Deployments?: Array<_UnmarshalledBulkDeploymentResult>;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
