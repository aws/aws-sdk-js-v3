import { _UnmarshalledBulkDeployment } from "./_BulkDeployment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBulkDeploymentsOutput shape
 */
export interface ListBulkDeploymentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of bulk deployments.
   */
  BulkDeployments?: Array<_UnmarshalledBulkDeployment>;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
