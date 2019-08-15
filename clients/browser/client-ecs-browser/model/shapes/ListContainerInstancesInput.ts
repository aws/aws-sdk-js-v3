import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListContainerInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    filter: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
