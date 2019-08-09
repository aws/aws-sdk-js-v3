/**
 * <p>The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface _DeploymentController {
  /**
   * <p>The deployment controller type to use.</p> <p>There are three deployment controller types available:</p> <dl> <dt>ECS</dt> <dd> <p>The rolling update (<code>ECS</code>) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the <a>DeploymentConfiguration</a>.</p> </dd> <dt>CODE_DEPLOY</dt> <dd> <p>The blue/green (<code>CODE_DEPLOY</code>) deployment type uses the blue/green deployment model powered by AWS CodeDeploy, which allows you to verify a new deployment of a service before sending production traffic to it.</p> </dd> <dt>EXTERNAL</dt> <dd> <p>The external (<code>EXTERNAL</code>) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.</p> </dd> </dl>
   */
  type: "ECS" | "CODE_DEPLOY" | "EXTERNAL" | string;
}

export type _UnmarshalledDeploymentController = _DeploymentController;
