import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSnapshotLimitsInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    }
  }
};
