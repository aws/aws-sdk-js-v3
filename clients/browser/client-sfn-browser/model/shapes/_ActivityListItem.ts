import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityListItem: _Structure_ = {
  type: "structure",
  required: ["activityArn", "name", "creationDate"],
  members: {
    activityArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
