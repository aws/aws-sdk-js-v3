import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceOutput shape
 */
export interface CreateServiceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of your service following the create call.</p> <p>If a service is using the <code>ECS</code> deployment controller, the <code>deploymentController</code> and <code>taskSets</code> parameters will not be returned.</p> <p>If the service is using the <code>CODE_DEPLOY</code> deployment controller, the <code>deploymentController</code>, <code>taskSets</code> and <code>deployments</code> parameters will be returned, however the <code>deployments</code> parameter will be an empty list.</p>
   */
  service?: _UnmarshalledService;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
