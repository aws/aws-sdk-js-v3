import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteActivationInput: _Structure_ = {
  type: "structure",
  required: ["ActivationId"],
  members: {
    ActivationId: {
      shape: {
        type: "string"
      }
    }
  }
};
