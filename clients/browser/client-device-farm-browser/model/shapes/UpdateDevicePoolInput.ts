import { _Rules } from "./_Rules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDevicePoolInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    rules: {
      shape: _Rules
    },
    maxDevices: {
      shape: {
        type: "integer"
      }
    },
    clearMaxDevices: {
      shape: {
        type: "boolean"
      }
    }
  }
};
