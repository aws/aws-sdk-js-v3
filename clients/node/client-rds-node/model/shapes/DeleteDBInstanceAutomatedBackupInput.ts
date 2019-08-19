import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBInstanceAutomatedBackupInput: _Structure_ = {
  type: "structure",
  required: ["DbiResourceId"],
  members: {
    DbiResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
