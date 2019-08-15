import { _DBInstance } from "./_DBInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopDBInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstance: {
      shape: _DBInstance
    }
  }
};
