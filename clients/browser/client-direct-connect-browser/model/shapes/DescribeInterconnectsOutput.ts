import { _InterconnectList } from "./_InterconnectList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInterconnectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    interconnects: {
      shape: _InterconnectList
    }
  }
};
