import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOrganizationInput shape
 */
export interface CreateOrganizationInput {
  /**
   * <p>Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.</p> <ul> <li> <p> <code>CONSOLIDATED_BILLING</code>: All member accounts have their bills consolidated to and paid by the master account. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only">Consolidated billing</a> in the <i>AWS Organizations User Guide.</i> </p> <p> The consolidated billing feature subset isn't available for organizations in the AWS GovCloud (US) Region.</p> </li> <li> <p> <code>ALL</code>: In addition to all the features supported by the consolidated billing feature set, the master account can also apply any type of policy to any member account in the organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all">All features</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul>
   */
  FeatureSet?: "ALL" | "CONSOLIDATED_BILLING" | string;

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
