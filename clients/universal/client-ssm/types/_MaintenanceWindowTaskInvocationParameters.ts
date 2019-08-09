import {
  _MaintenanceWindowRunCommandParameters,
  _UnmarshalledMaintenanceWindowRunCommandParameters
} from "./_MaintenanceWindowRunCommandParameters";
import {
  _MaintenanceWindowAutomationParameters,
  _UnmarshalledMaintenanceWindowAutomationParameters
} from "./_MaintenanceWindowAutomationParameters";
import {
  _MaintenanceWindowStepFunctionsParameters,
  _UnmarshalledMaintenanceWindowStepFunctionsParameters
} from "./_MaintenanceWindowStepFunctionsParameters";
import {
  _MaintenanceWindowLambdaParameters,
  _UnmarshalledMaintenanceWindowLambdaParameters
} from "./_MaintenanceWindowLambdaParameters";

/**
 * <p>The parameters for task execution.</p>
 */
export interface _MaintenanceWindowTaskInvocationParameters {
  /**
   * <p>The parameters for a RUN_COMMAND task type.</p>
   */
  RunCommand?: _MaintenanceWindowRunCommandParameters;

  /**
   * <p>The parameters for an AUTOMATION task type.</p>
   */
  Automation?: _MaintenanceWindowAutomationParameters;

  /**
   * <p>The parameters for a STEP_FUNCTIONS task type.</p>
   */
  StepFunctions?: _MaintenanceWindowStepFunctionsParameters;

  /**
   * <p>The parameters for a LAMBDA task type.</p>
   */
  Lambda?: _MaintenanceWindowLambdaParameters;
}

export interface _UnmarshalledMaintenanceWindowTaskInvocationParameters
  extends _MaintenanceWindowTaskInvocationParameters {
  /**
   * <p>The parameters for a RUN_COMMAND task type.</p>
   */
  RunCommand?: _UnmarshalledMaintenanceWindowRunCommandParameters;

  /**
   * <p>The parameters for an AUTOMATION task type.</p>
   */
  Automation?: _UnmarshalledMaintenanceWindowAutomationParameters;

  /**
   * <p>The parameters for a STEP_FUNCTIONS task type.</p>
   */
  StepFunctions?: _UnmarshalledMaintenanceWindowStepFunctionsParameters;

  /**
   * <p>The parameters for a LAMBDA task type.</p>
   */
  Lambda?: _UnmarshalledMaintenanceWindowLambdaParameters;
}
