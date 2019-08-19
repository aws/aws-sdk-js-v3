import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
