import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>StartWorkflowExecution</code> API action was called without the required parameters set.</p> <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be set to start the execution. However, these parameters might have been set as defaults when the workflow type was registered. In this case, you can omit these parameters from the <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow type.</p> <note> <p>If these parameters aren't set and no default parameters were defined in the workflow type, this error is displayed.</p> </note>
 */
export interface DefaultUndefinedFault
  extends __ServiceException__<_DefaultUndefinedFaultDetails> {
  name: "DefaultUndefinedFault";
}

export interface _DefaultUndefinedFaultDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
