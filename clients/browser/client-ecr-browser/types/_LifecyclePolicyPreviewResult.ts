import {
  _LifecyclePolicyRuleAction,
  _UnmarshalledLifecyclePolicyRuleAction
} from "./_LifecyclePolicyRuleAction";

/**
 * <p>The result of the lifecycle policy preview.</p>
 */
export interface _LifecyclePolicyPreviewResult {
  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: Array<string> | Iterable<string>;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.</p>
   */
  imagePushedAt?: Date | string | number;

  /**
   * <p>The type of action to be taken.</p>
   */
  action?: _LifecyclePolicyRuleAction;

  /**
   * <p>The priority of the applied rule.</p>
   */
  appliedRulePriority?: number;
}

export interface _UnmarshalledLifecyclePolicyPreviewResult
  extends _LifecyclePolicyPreviewResult {
  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: Array<string>;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.</p>
   */
  imagePushedAt?: Date;

  /**
   * <p>The type of action to be taken.</p>
   */
  action?: _UnmarshalledLifecyclePolicyRuleAction;
}
