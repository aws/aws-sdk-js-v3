import { _Resource } from "./_Resource";
import { _VersionInfo } from "./_VersionInfo";
import { _Attribute } from "./_Attribute";
import { _PlatformDevice } from "./_PlatformDevice";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterContainerInstanceInput shape
 */
export interface RegisterContainerInstanceInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster with which to register your container instance. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: <code>curl http://169.254.169.254/latest/dynamic/instance-identity/document/</code> </p>
   */
  instanceIdentityDocument?: string;

  /**
   * <p>The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: <code>curl http://169.254.169.254/latest/dynamic/instance-identity/signature/</code> </p>
   */
  instanceIdentityDocumentSignature?: string;

  /**
   * <p>The resources available on the instance.</p>
   */
  totalResources?: Array<_Resource> | Iterable<_Resource>;

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the container instance.</p>
   */
  versionInfo?: _VersionInfo;

  /**
   * <p>The ARN of the container instance (if it was previously registered).</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The container instance attributes that this container instance supports.</p>
   */
  attributes?: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The devices that are available on the container instance. The only supported device type is a GPU.</p>
   */
  platformDevices?: Array<_PlatformDevice> | Iterable<_PlatformDevice>;

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
