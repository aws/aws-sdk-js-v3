import { _DeviceSelectionConfiguration } from "./_DeviceSelectionConfiguration";
import { _ScheduleRunTest } from "./_ScheduleRunTest";
import { _ScheduleRunConfiguration } from "./_ScheduleRunConfiguration";
import { _ExecutionConfiguration } from "./_ExecutionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ScheduleRunInput: _Structure_ = {
  type: "structure",
  required: ["projectArn", "test"],
  members: {
    projectArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    appArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    devicePoolArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    deviceSelectionConfiguration: {
      shape: _DeviceSelectionConfiguration
    },
    name: {
      shape: {
        type: "string"
      }
    },
    test: {
      shape: _ScheduleRunTest
    },
    configuration: {
      shape: _ScheduleRunConfiguration
    },
    executionConfiguration: {
      shape: _ExecutionConfiguration
    }
  }
};
