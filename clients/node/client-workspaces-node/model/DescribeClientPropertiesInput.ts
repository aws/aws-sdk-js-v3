import { _ResourceIdList } from "./_ResourceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientPropertiesInput: _Structure_ = {
  type: "structure",
  required: ["ResourceIds"],
  members: {
    ResourceIds: {
      shape: _ResourceIdList
    }
  }
};
