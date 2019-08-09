import { _UnmarshalledDeployment } from "./_Deployment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeploymentsOutput shape
 */
export interface ListDeploymentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of deployments for the requested groups.
   */
  Deployments?: Array<_UnmarshalledDeployment>;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
