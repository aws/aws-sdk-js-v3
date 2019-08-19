import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
