import { _ApplicationComponent } from "./_ApplicationComponent";
import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComponentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationComponent: {
      shape: _ApplicationComponent
    },
    ResourceList: {
      shape: _ResourceList
    }
  }
};
