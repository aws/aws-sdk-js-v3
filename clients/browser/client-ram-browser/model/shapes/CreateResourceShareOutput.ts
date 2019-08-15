import { _ResourceShare } from "./_ResourceShare";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceShareOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShare: {
      shape: _ResourceShare
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
