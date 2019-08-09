/**
 * <p>Information about an environment member for an AWS Cloud9 development environment.</p>
 */
export interface _EnvironmentMember {
  /**
   * <p>The type of environment member permissions associated with this environment member. Available values include:</p> <ul> <li> <p> <code>owner</code>: Owns the environment.</p> </li> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul>
   */
  permissions?: "owner" | "read-write" | "read-only" | string;

  /**
   * <p>The user ID in AWS Identity and Access Management (AWS IAM) of the environment member.</p>
   */
  userId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member.</p>
   */
  userArn?: string;

  /**
   * <p>The ID of the environment for the environment member.</p>
   */
  environmentId?: string;

  /**
   * <p>The time, expressed in epoch time format, when the environment member last opened the environment.</p>
   */
  lastAccess?: Date | string | number;
}

export interface _UnmarshalledEnvironmentMember extends _EnvironmentMember {
  /**
   * <p>The time, expressed in epoch time format, when the environment member last opened the environment.</p>
   */
  lastAccess?: Date;
}
