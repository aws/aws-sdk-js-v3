import { _IdList } from "./_IdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Relationship: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Ids: {
      shape: _IdList
    }
  }
};
