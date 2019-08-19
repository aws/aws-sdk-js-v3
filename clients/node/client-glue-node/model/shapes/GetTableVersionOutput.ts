import { _TableVersion } from "./_TableVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTableVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableVersion: {
      shape: _TableVersion
    }
  }
};
