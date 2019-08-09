import {
  _MethodSnapshot,
  _UnmarshalledMethodSnapshot
} from "./_MethodSnapshot";

/**
 * <p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
 */
export interface _Deployment {
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
  createdDate?: Date | string | number;

  /**
   * <p>A summary of the <a>RestApi</a> at the date and time that the deployment resource was created.</p>
   */
  apiSummary?:
    | {
        [key: string]:
          | { [key: string]: _MethodSnapshot }
          | Iterable<[string, _MethodSnapshot]>;
      }
    | Iterable<
        [
          string,

            | { [key: string]: _MethodSnapshot }
            | Iterable<[string, _MethodSnapshot]>
        ]
      >;
}

export interface _UnmarshalledDeployment extends _Deployment {
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
}
