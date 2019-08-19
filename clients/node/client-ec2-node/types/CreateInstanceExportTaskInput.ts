import { _ExportToS3TaskSpecification } from "./_ExportToS3TaskSpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceExportTaskInput shape
 */
export interface CreateInstanceExportTaskInput {
  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 bytes.</p>
   */
  Description?: string;

  /**
   * <p>The format and location for an instance export task.</p>
   */
  ExportToS3Task?: _ExportToS3TaskSpecification;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: "citrix" | "vmware" | "microsoft" | string;

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
