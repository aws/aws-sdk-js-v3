import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHITTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HITTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
