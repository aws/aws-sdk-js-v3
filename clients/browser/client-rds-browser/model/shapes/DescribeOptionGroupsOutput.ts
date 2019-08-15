import { _OptionGroupsList } from "./_OptionGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOptionGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroupsList: {
      shape: _OptionGroupsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
