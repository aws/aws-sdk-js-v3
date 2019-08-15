import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListArtifactsInput: _Structure_ = {
  type: "structure",
  required: ["arn", "type"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
