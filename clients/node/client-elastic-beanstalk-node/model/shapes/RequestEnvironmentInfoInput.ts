import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestEnvironmentInfoInput: _Structure_ = {
  type: "structure",
  required: ["InfoType"],
  members: {
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    InfoType: {
      shape: {
        type: "string"
      }
    }
  }
};
