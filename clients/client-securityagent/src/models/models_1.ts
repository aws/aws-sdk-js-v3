// smithy-typescript generated code
import type { TargetDomainStatus } from "./enums";
import type { Assets, CloudWatchLog, DocumentInfo, ReportDestination } from "./models_0";

/**
 * <p>Output for the UpdateThreatModel operation.</p>
 * @public
 */
export interface UpdateThreatModelOutput {
  /**
   * <p>The unique identifier of the threat model.</p>
   * @public
   */
  threatModelId: string | undefined;

  /**
   * <p>The title of the threat model.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the threat model.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>A description of the application or system being threat modeled.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The assets included in the threat model.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The scoped documents for the agent to focus on during threat modeling.</p>
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * <p>The IAM service role used for the threat model.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the threat model.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The date and time the threat model was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the threat model was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * <p>Input for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainInput {
  /**
   * <p>The unique identifier of the target domain to verify.</p>
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * <p>Output for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainOutput {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId?: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;

  /**
   * <p>The verification status of the target domain.</p>
   * @public
   */
  status?: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;
}
