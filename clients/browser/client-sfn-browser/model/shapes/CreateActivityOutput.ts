import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActivityOutput: _Structure_ = {
  type: "structure",
  required: ["activityArn", "creationDate"],
  members: {
    activityArn: {
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
