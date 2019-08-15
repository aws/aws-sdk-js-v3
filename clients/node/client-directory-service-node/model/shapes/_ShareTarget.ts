import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShareTarget: _Structure_ = {
  type: "structure",
  required: ["Id", "Type"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
