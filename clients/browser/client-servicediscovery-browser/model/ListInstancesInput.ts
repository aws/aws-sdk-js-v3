import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstancesInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId"],
  members: {
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
