import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateExclusionsPreviewOutput: _Structure_ = {
  type: "structure",
  required: ["previewToken"],
  members: {
    previewToken: {
      shape: {
        type: "string"
      }
    }
  }
};
