import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineStateInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
