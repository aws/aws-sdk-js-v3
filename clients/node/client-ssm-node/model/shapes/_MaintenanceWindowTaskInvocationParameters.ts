import { _MaintenanceWindowRunCommandParameters } from "./_MaintenanceWindowRunCommandParameters";
import { _MaintenanceWindowAutomationParameters } from "./_MaintenanceWindowAutomationParameters";
import { _MaintenanceWindowStepFunctionsParameters } from "./_MaintenanceWindowStepFunctionsParameters";
import { _MaintenanceWindowLambdaParameters } from "./_MaintenanceWindowLambdaParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowTaskInvocationParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RunCommand: {
      shape: _MaintenanceWindowRunCommandParameters
    },
    Automation: {
      shape: _MaintenanceWindowAutomationParameters
    },
    StepFunctions: {
      shape: _MaintenanceWindowStepFunctionsParameters
    },
    Lambda: {
      shape: _MaintenanceWindowLambdaParameters
    }
  }
};
