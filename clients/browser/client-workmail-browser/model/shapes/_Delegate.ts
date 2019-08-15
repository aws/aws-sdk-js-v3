import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Delegate: _Structure_ = {
  type: "structure",
  required: ["Id", "Type"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
