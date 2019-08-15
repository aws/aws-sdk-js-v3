import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobCommand: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ScriptLocation: {
      shape: {
        type: "string"
      }
    },
    PythonVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
