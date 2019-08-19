import { _Rules } from "./_Rules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDevicePoolInput: _Structure_ = {
  type: "structure",
  required: ["projectArn", "name", "rules"],
  members: {
    projectArn: {
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
    }
  }
};
