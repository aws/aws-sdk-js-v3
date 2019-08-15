import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationSnapshotsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
