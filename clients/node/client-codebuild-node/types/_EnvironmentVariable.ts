/**
 * <p>Information about an environment variable for a build project or a build.</p>
 */
export interface _EnvironmentVariable {
  /**
   * <p>The name or key of the environment variable.</p>
   */
  name: string;

  /**
   * <p>The value of the environment variable.</p> <important> <p>We strongly discourage the use of environment variables to store sensitive values, especially AWS secret key IDs and secret access keys. Environment variables can be displayed in plain text using the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI).</p> </important>
   */
  value: string;

  /**
   * <p>The type of environment variable. Valid values include:</p> <ul> <li> <p> <code>PARAMETER_STORE</code>: An environment variable stored in Amazon EC2 Systems Manager Parameter Store.</p> </li> <li> <p> <code>PLAINTEXT</code>: An environment variable in plaintext format.</p> </li> </ul>
   */
  type?: "PLAINTEXT" | "PARAMETER_STORE" | string;
}

export type _UnmarshalledEnvironmentVariable = _EnvironmentVariable;
