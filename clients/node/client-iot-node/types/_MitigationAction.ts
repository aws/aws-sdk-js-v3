import {
  _MitigationActionParams,
  _UnmarshalledMitigationActionParams
} from "./_MitigationActionParams";

/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface _MitigationAction {
  /**
   * <p>A user-friendly name for the mitigation action.</p>
   */
  name?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  id?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: _MitigationActionParams;
}

export interface _UnmarshalledMitigationAction extends _MitigationAction {
  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: _UnmarshalledMitigationActionParams;
}
