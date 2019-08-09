import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
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
    launchType: {
      shape: {
        type: "string"
      }
    },
    schedulingStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
