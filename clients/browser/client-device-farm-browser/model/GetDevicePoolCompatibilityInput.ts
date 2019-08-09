import { _ScheduleRunTest } from "./_ScheduleRunTest";
import { _ScheduleRunConfiguration } from "./_ScheduleRunConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevicePoolCompatibilityInput: _Structure_ = {
  type: "structure",
  required: ["devicePoolArn"],
  members: {
    devicePoolArn: {
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
    testType: {
      shape: {
        type: "string"
      }
    },
    test: {
      shape: _ScheduleRunTest
    },
    configuration: {
      shape: _ScheduleRunConfiguration
    }
  }
};
