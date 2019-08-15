import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCommunicationsInput: _Structure_ = {
  type: "structure",
  required: ["caseId"],
  members: {
    caseId: {
      shape: {
        type: "string"
      }
    },
    beforeTime: {
      shape: {
        type: "string"
      }
    },
    afterTime: {
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
        type: "integer",
        min: 10
      }
    }
  }
};
