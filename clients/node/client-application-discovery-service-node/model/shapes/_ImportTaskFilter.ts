import { _ImportTaskFilterValueList } from "./_ImportTaskFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportTaskFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _ImportTaskFilterValueList
    }
  }
};
