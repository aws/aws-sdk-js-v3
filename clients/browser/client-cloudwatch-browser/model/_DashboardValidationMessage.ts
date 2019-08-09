import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashboardValidationMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DataPath: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
