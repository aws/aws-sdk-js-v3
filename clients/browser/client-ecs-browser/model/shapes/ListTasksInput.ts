import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    containerInstance: {
      shape: {
        type: "string"
      }
    },
    family: {
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
    startedBy: {
      shape: {
        type: "string"
      }
    },
    serviceName: {
      shape: {
        type: "string"
      }
    },
    desiredStatus: {
      shape: {
        type: "string"
      }
    },
    launchType: {
      shape: {
        type: "string"
      }
    }
  }
};
