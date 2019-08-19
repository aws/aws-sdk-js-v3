import { _CmafPackage } from "./_CmafPackage";
import { _DashPackage } from "./_DashPackage";
import { _HlsPackage } from "./_HlsPackage";
import { _MssPackage } from "./_MssPackage";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 */
export interface CreatePackagingConfigurationInput {
  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: _CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: _MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId: string;

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
