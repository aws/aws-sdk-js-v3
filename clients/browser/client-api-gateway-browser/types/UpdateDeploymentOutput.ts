import { _UnmarshalledMethodSnapshot } from "./_MethodSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
 */
export interface UpdateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier for the deployment resource.</p>
   */
  id?: string;

  /**
   * <p>The description for the deployment resource.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the deployment resource was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>A summary of the <a>RestApi</a> at the date and time that the deployment resource was created.</p>
   */
  apiSummary?: {
    [key: string]: { [key: string]: _UnmarshalledMethodSnapshot };
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
