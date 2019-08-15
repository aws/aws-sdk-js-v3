import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTaskExecutionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
