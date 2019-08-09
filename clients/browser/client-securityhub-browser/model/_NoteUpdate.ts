import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NoteUpdate: _Structure_ = {
  type: "structure",
  required: ["Text", "UpdatedBy"],
  members: {
    Text: {
      shape: {
        type: "string"
      }
    },
    UpdatedBy: {
      shape: {
        type: "string"
      }
    }
  }
};
