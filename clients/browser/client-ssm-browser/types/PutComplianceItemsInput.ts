import { _ComplianceExecutionSummary } from "./_ComplianceExecutionSummary";
import { _ComplianceItemEntry } from "./_ComplianceItemEntry";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutComplianceItemsInput shape
 */
export interface PutComplianceItemsInput {
  /**
   * <p>Specify an ID for this resource. For a managed instance, this is the instance ID.</p>
   */
  ResourceId: string;

  /**
   * <p>Specify the type of resource. <code>ManagedInstance</code> is currently the only supported resource type.</p>
   */
  ResourceType: string;

  /**
   * <p>Specify the compliance type. For example, specify Association (for a State Manager association), Patch, or Custom:<code>string</code>.</p>
   */
  ComplianceType: string;

  /**
   * <p>A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionSummary: _ComplianceExecutionSummary;

  /**
   * <p>Information about the compliance as defined by the resource type. For example, for a patch compliance type, <code>Items</code> includes information about the PatchSeverity, Classification, etc.</p>
   */
  Items: Array<_ComplianceItemEntry> | Iterable<_ComplianceItemEntry>;

  /**
   * <p>MD5 or SHA-256 content hash. The content hash is used to determine if existing information should be overwritten or ignored. If the content hashes match, the request to put compliance information is ignored.</p>
   */
  ItemContentHash?: string;

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
