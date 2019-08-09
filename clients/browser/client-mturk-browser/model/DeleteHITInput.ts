import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
