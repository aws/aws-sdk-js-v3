import { _OpsItem } from "./_OpsItem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOpsItemOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OpsItem: {
      shape: _OpsItem
    }
  }
};
