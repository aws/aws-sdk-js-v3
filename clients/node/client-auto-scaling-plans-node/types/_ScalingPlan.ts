import {
  _ApplicationSource,
  _UnmarshalledApplicationSource
} from "./_ApplicationSource";
import {
  _ScalingInstruction,
  _UnmarshalledScalingInstruction
} from "./_ScalingInstruction";

/**
 * <p>Represents a scaling plan.</p>
 */
export interface _ScalingPlan {
  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number;

  /**
   * <p>The application source.</p>
   */
  ApplicationSource: _ApplicationSource;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions:
    | Array<_ScalingInstruction>
    | Iterable<_ScalingInstruction>;

  /**
   * <p>The status of the scaling plan.</p> <ul> <li> <p> <code>Active</code> - The scaling plan is active.</p> </li> <li> <p> <code>ActiveWithProblems</code> - The scaling plan is active, but the scaling configuration for one or more resources could not be applied.</p> </li> <li> <p> <code>CreationInProgress</code> - The scaling plan is being created.</p> </li> <li> <p> <code>CreationFailed</code> - The scaling plan could not be created.</p> </li> <li> <p> <code>DeletionInProgress</code> - The scaling plan is being deleted.</p> </li> <li> <p> <code>DeletionFailed</code> - The scaling plan could not be deleted.</p> </li> <li> <p> <code>UpdateInProgress</code> - The scaling plan is being updated.</p> </li> <li> <p> <code>UpdateFailed</code> - The scaling plan could not be updated.</p> </li> </ul>
   */
  StatusCode:
    | "Active"
    | "ActiveWithProblems"
    | "CreationInProgress"
    | "CreationFailed"
    | "DeletionInProgress"
    | "DeletionFailed"
    | "UpdateInProgress"
    | "UpdateFailed"
    | string;

  /**
   * <p>A simple message about the current status of the scaling plan.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Unix time stamp when the scaling plan entered the current status.</p>
   */
  StatusStartTime?: Date | string | number;

  /**
   * <p>The Unix time stamp when the scaling plan was created.</p>
   */
  CreationTime?: Date | string | number;
}

export interface _UnmarshalledScalingPlan extends _ScalingPlan {
  /**
   * <p>The application source.</p>
   */
  ApplicationSource: _UnmarshalledApplicationSource;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions: Array<_UnmarshalledScalingInstruction>;

  /**
   * <p>The Unix time stamp when the scaling plan entered the current status.</p>
   */
  StatusStartTime?: Date;

  /**
   * <p>The Unix time stamp when the scaling plan was created.</p>
   */
  CreationTime?: Date;
}
