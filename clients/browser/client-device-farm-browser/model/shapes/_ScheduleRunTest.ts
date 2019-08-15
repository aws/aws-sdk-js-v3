import { _TestParameters } from "./_TestParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleRunTest: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    testPackageArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    testSpecArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    filter: {
      shape: {
        type: "string"
      }
    },
    parameters: {
      shape: _TestParameters
    }
  }
};
