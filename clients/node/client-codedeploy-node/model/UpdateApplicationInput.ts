import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    newApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
