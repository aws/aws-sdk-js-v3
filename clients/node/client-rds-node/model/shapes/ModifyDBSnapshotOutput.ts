import { _DBSnapshot } from "./_DBSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSnapshot: {
      shape: _DBSnapshot
    }
  }
};
