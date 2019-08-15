import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProtectionInput: _Structure_ = {
  type: "structure",
  required: ["ProtectionId"],
  members: {
    ProtectionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
