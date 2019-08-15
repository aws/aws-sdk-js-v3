import { _OpsFilterValueList } from "./_OpsFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _OpsFilterValueList
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
