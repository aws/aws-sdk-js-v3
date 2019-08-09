import { _S3Location } from "./_S3Location";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface CreateBuildInput {
  /**
   * <p>Descriptive label that is associated with a build. Build names do not need to be unique. You can use <a>UpdateBuild</a> to change this value later. </p>
   */
  Name?: string;

  /**
   * <p>Version that is associated with a build or script. Version strings do not need to be unique. You can use <a>UpdateBuild</a> to change this value later. </p>
   */
  Version?: string;

  /**
   * <p>Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key, as well as a the ARN for a role that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket must be in the same region that you want to create a new build in.</p>
   */
  StorageLocation?: _S3Location;

  /**
   * <p>Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.</p>
   */
  OperatingSystem?: "WINDOWS_2012" | "AMAZON_LINUX" | string;

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
