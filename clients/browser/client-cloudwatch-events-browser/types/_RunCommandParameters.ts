import {
  _RunCommandTarget,
  _UnmarshalledRunCommandTarget
} from "./_RunCommandTarget";

/**
 * <p>This parameter contains the criteria (either <code>InstanceIds</code> or a tag) used to specify which EC2 instances are to be sent the command. </p>
 */
export interface _RunCommandParameters {
  /**
   * <p>Currently, we support including only one <code>RunCommandTarget</code> block, which specifies either an array of <code>InstanceIds</code> or a tag.</p>
   */
  RunCommandTargets: Array<_RunCommandTarget> | Iterable<_RunCommandTarget>;
}

export interface _UnmarshalledRunCommandParameters
  extends _RunCommandParameters {
  /**
   * <p>Currently, we support including only one <code>RunCommandTarget</code> block, which specifies either an array of <code>InstanceIds</code> or a tag.</p>
   */
  RunCommandTargets: Array<_UnmarshalledRunCommandTarget>;
}
