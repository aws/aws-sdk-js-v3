import { _ResourceRecordSet } from "./_ResourceRecordSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Change: _Structure_ = {
  type: "structure",
  required: ["Action", "ResourceRecordSet"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    ResourceRecordSet: {
      shape: _ResourceRecordSet
    }
  }
};
