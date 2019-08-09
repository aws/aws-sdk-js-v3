import { _SourceConfig } from "./_SourceConfig";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRobotApplicationInput shape
 */
export interface CreateRobotApplicationInput {
  /**
   * <p>The name of the robot application.</p>
   */
  name: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: Array<_SourceConfig> | Iterable<_SourceConfig>;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite: _RobotSoftwareSuite;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot application.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
