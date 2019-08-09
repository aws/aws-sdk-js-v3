/**
 * <p>Information about an application revision.</p>
 */
export interface _GenericRevisionInfo {
  /**
   * <p>A comment about the revision.</p>
   */
  description?: string;

  /**
   * <p>The deployment groups for which this is the current target revision.</p>
   */
  deploymentGroups?: Array<string> | Iterable<string>;

  /**
   * <p>When the revision was first used by AWS CodeDeploy.</p>
   */
  firstUsedTime?: Date | string | number;

  /**
   * <p>When the revision was last used by AWS CodeDeploy.</p>
   */
  lastUsedTime?: Date | string | number;

  /**
   * <p>When the revision was registered with AWS CodeDeploy.</p>
   */
  registerTime?: Date | string | number;
}

export interface _UnmarshalledGenericRevisionInfo extends _GenericRevisionInfo {
  /**
   * <p>The deployment groups for which this is the current target revision.</p>
   */
  deploymentGroups?: Array<string>;

  /**
   * <p>When the revision was first used by AWS CodeDeploy.</p>
   */
  firstUsedTime?: Date;

  /**
   * <p>When the revision was last used by AWS CodeDeploy.</p>
   */
  lastUsedTime?: Date;

  /**
   * <p>When the revision was registered with AWS CodeDeploy.</p>
   */
  registerTime?: Date;
}
