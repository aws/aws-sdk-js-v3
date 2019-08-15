import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PartitionValueList: _Structure_ = {
  type: "structure",
  required: ["Values"],
  members: {
    Values: {
      shape: _ValueStringList
    }
  }
};
