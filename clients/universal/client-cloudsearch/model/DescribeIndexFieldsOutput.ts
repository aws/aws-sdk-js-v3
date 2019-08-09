import { _IndexFieldStatusList } from "./_IndexFieldStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIndexFieldsOutput: _Structure_ = {
  type: "structure",
  required: ["IndexFields"],
  members: {
    IndexFields: {
      shape: _IndexFieldStatusList
    }
  }
};
