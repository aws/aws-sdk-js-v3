import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWorkspaceImageInput: _Structure_ = {
  type: "structure",
  required: ["ImageId"],
  members: {
    ImageId: {
      shape: {
        type: "string"
      }
    }
  }
};
