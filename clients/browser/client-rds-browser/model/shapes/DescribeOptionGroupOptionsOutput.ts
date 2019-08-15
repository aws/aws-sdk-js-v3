import { _OptionGroupOptionsList } from "./_OptionGroupOptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOptionGroupOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroupOptions: {
      shape: _OptionGroupOptionsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
