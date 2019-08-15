import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Target: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "sourceReference"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sourceReference: {
      shape: {
        type: "string"
      }
    },
    destinationReference: {
      shape: {
        type: "string"
      }
    }
  }
};
