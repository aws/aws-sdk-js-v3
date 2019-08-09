import { _AuditNotificationTarget } from "./_AuditNotificationTarget";
import { _AuditCheckConfiguration } from "./_AuditCheckConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAccountAuditConfigurationInput shape
 */
export interface UpdateAccountAuditConfigurationInput {
  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?:
    | { [key in "SNS" | string]: _AuditNotificationTarget }
    | Iterable<["SNS" | string, _AuditNotificationTarget]>;

  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?:
    | { [key: string]: _AuditCheckConfiguration }
    | Iterable<[string, _AuditCheckConfiguration]>;

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
