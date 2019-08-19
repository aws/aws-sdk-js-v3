import { _ActivationList } from "./_ActivationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivationList: {
      shape: _ActivationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
