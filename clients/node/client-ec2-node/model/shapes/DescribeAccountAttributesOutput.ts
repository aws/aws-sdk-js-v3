import { _AccountAttributeList } from "./_AccountAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountAttributes: {
      shape: _AccountAttributeList,
      locationName: "accountAttributeSet"
    }
  }
};
