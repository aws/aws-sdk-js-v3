import {
  _DeploymentCommand,
  _UnmarshalledDeploymentCommand
} from "./_DeploymentCommand";

/**
 * <p>Describes a deployment of a stack or app.</p>
 */
export interface _Deployment {
  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>Date when the deployment was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Date when the deployment completed.</p>
   */
  CompletedAt?: string;

  /**
   * <p>The deployment duration.</p>
   */
  Duration?: number;

  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * <p>Used to specify a stack or deployment command.</p>
   */
  Command?: _DeploymentCommand;

  /**
   * <p>The deployment status:</p> <ul> <li> <p>running</p> </li> <li> <p>successful</p> </li> <li> <p>failed</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>A string that contains user-defined custom JSON. It can be used to override the corresponding default stack configuration attribute values for stack or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code> </p> <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The IDs of the target instances.</p>
   */
  InstanceIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDeployment extends _Deployment {
  /**
   * <p>Used to specify a stack or deployment command.</p>
   */
  Command?: _UnmarshalledDeploymentCommand;

  /**
   * <p>The IDs of the target instances.</p>
   */
  InstanceIds?: Array<string>;
}
