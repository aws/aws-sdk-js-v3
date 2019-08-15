import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateHITTypeOfHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId", "HITTypeId"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
