// smithy-typescript generated code
import type { PermissionType, ShareStatus } from "./enums";
import type { Workload } from "./models_0";

/**
 * <p>Output of an update workload call.</p>
 * @public
 */
export interface UpdateWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;
}

/**
 * <p>A workload share return object.</p>
 * @public
 */
export interface WorkloadShare {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A workload share return object.</p>
   * @public
   */
  WorkloadShare?: WorkloadShare | undefined;
}

/**
 * @public
 */
export interface UpgradeLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeProfileVersionInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeReviewTemplateLensReviewInput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}
