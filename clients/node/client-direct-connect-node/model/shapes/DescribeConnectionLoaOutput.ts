import { _Loa } from "./_Loa";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConnectionLoaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    loa: {
      shape: _Loa
    }
  }
};
