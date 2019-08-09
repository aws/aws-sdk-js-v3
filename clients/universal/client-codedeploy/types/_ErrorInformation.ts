/**
 * <p>Information about a deployment error.</p>
 */
export interface _ErrorInformation {
  /**
   * <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html">Error Codes for AWS CodeDeploy</a> in the <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a>.</p> <p>The error code:</p> <ul> <li> <p>APPLICATION_MISSING: The application was missing. This error code is most likely raised if the application is deleted after the deployment is created, but before it is started.</p> </li> <li> <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is most likely raised if the deployment group is deleted after the deployment is created, but before it is started.</p> </li> <li> <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p> </li> <li> <p>IAM_ROLE_PERMISSIONS: The service role does not have the correct permissions.</p> </li> <li> <p>INTERNAL_ERROR: There was an internal error.</p> </li> <li> <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon EC2.</p> </li> <li> <p>NO_INSTANCES: No instances were specified, or no instances can be found.</p> </li> <li> <p>OVER_MAX_INSTANCES: The maximum number of instances was exceeded.</p> </li> <li> <p>THROTTLED: The operation was throttled because the calling account exceeded the throttling limits of one or more AWS services.</p> </li> <li> <p>TIMEOUT: The deployment has timed out.</p> </li> <li> <p>REVISION_MISSING: The revision ID was missing. This error code is most likely raised if the revision is deleted after the deployment is created, but before it is started.</p> </li> </ul>
   */
  code?:
    | "AGENT_ISSUE"
    | "ALARM_ACTIVE"
    | "APPLICATION_MISSING"
    | "AUTOSCALING_VALIDATION_ERROR"
    | "AUTO_SCALING_CONFIGURATION"
    | "AUTO_SCALING_IAM_ROLE_PERMISSIONS"
    | "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"
    | "CUSTOMER_APPLICATION_UNHEALTHY"
    | "DEPLOYMENT_GROUP_MISSING"
    | "ECS_UPDATE_ERROR"
    | "ELASTIC_LOAD_BALANCING_INVALID"
    | "ELB_INVALID_INSTANCE"
    | "HEALTH_CONSTRAINTS"
    | "HEALTH_CONSTRAINTS_INVALID"
    | "HOOK_EXECUTION_FAILURE"
    | "IAM_ROLE_MISSING"
    | "IAM_ROLE_PERMISSIONS"
    | "INTERNAL_ERROR"
    | "INVALID_ECS_SERVICE"
    | "INVALID_LAMBDA_CONFIGURATION"
    | "INVALID_LAMBDA_FUNCTION"
    | "INVALID_REVISION"
    | "MANUAL_STOP"
    | "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"
    | "MISSING_ELB_INFORMATION"
    | "MISSING_GITHUB_TOKEN"
    | "NO_EC2_SUBSCRIPTION"
    | "NO_INSTANCES"
    | "OVER_MAX_INSTANCES"
    | "RESOURCE_LIMIT_EXCEEDED"
    | "REVISION_MISSING"
    | "THROTTLED"
    | "TIMEOUT"
    | string;

  /**
   * <p>An accompanying error message.</p>
   */
  message?: string;
}

export type _UnmarshalledErrorInformation = _ErrorInformation;
