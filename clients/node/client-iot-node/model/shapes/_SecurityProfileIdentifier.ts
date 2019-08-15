import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityProfileIdentifier: _Structure_ = {
  type: "structure",
  required: ["name", "arn"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    }
  }
};
