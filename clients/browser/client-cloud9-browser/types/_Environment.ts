import {
  _EnvironmentLifecycle,
  _UnmarshalledEnvironmentLifecycle
} from "./_EnvironmentLifecycle";

/**
 * <p>Information about an AWS Cloud9 development environment.</p>
 */
export interface _Environment {
  /**
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * <p>The description for the environment.</p>
   */
  description?: string;

  /**
   * <p>The type of environment. Valid values include the following:</p> <ul> <li> <p> <code>ec2</code>: An Amazon Elastic Compute Cloud (Amazon EC2) instance connects to the environment.</p> </li> <li> <p> <code>ssh</code>: Your own server connects to the environment.</p> </li> </ul>
   */
  type?: "ssh" | "ec2" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner.</p>
   */
  ownerArn?: string;

  /**
   * <p>The state of the environment in its creation or deletion lifecycle.</p>
   */
  lifecycle?: _EnvironmentLifecycle;
}

export interface _UnmarshalledEnvironment extends _Environment {
  /**
   * <p>The state of the environment in its creation or deletion lifecycle.</p>
   */
  lifecycle?: _UnmarshalledEnvironmentLifecycle;
}
