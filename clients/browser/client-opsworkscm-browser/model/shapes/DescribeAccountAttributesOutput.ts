import { _AccountAttributes } from "./_AccountAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _AccountAttributes
    }
  }
};
