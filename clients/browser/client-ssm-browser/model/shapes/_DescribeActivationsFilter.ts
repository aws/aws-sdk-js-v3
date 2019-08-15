import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribeActivationsFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FilterKey: {
      shape: {
        type: "string"
      }
    },
    FilterValues: {
      shape: _StringList
    }
  }
};
