import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string",
        min: 39
      }
    }
  }
};
