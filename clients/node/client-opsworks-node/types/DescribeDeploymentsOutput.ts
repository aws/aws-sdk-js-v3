import { _UnmarshalledDeployment } from "./_Deployment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeDeployments</code> request.</p>
 */
export interface DescribeDeploymentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Deployment</code> objects that describe the deployments.</p>
   */
  Deployments?: Array<_UnmarshalledDeployment>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
