/**
 * <p>The Docker and Amazon ECS container agent version information about a container instance.</p>
 */
export interface _VersionInfo {
  /**
   * <p>The version number of the Amazon ECS container agent.</p>
   */
  agentVersion?: string;

  /**
   * <p>The Git commit hash for the Amazon ECS container agent build on the <a href="https://github.com/aws/amazon-ecs-agent/commits/master">amazon-ecs-agent </a> GitHub repository.</p>
   */
  agentHash?: string;

  /**
   * <p>The Docker version running on the container instance.</p>
   */
  dockerVersion?: string;
}

export type _UnmarshalledVersionInfo = _VersionInfo;
