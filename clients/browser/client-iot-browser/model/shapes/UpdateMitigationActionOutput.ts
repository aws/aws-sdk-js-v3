import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMitigationActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionArn: {
      shape: {
        type: "string"
      }
    },
    actionId: {
      shape: {
        type: "string"
      }
    }
  }
};
