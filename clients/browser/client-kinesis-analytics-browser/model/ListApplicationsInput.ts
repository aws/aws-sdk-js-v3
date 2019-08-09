import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExclusiveStartApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
