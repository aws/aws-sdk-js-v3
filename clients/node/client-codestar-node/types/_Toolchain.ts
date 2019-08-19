import {
  _ToolchainSource,
  _UnmarshalledToolchainSource
} from "./_ToolchainSource";

/**
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.</p>
 */
export interface _Toolchain {
  /**
   * <p>The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   */
  source: _ToolchainSource;

  /**
   * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack provisioning.</p>
   */
  roleArn?: string;

  /**
   * <p>The list of parameter overrides to be passed into the toolchain template during stack provisioning, if any.</p>
   */
  stackParameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledToolchain extends _Toolchain {
  /**
   * <p>The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   */
  source: _UnmarshalledToolchainSource;

  /**
   * <p>The list of parameter overrides to be passed into the toolchain template during stack provisioning, if any.</p>
   */
  stackParameters?: { [key: string]: string };
}
