import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectSourceVersion: _Structure_ = {
  type: "structure",
  required: ["sourceIdentifier", "sourceVersion"],
  members: {
    sourceIdentifier: {
      shape: {
        type: "string"
      }
    },
    sourceVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
