import { _OpsEntityItemMap } from "./_OpsEntityItemMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsEntity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Data: {
      shape: _OpsEntityItemMap
    }
  }
};
