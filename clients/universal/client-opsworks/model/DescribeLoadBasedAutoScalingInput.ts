import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBasedAutoScalingInput: _Structure_ = {
  type: "structure",
  required: ["LayerIds"],
  members: {
    LayerIds: {
      shape: _Strings
    }
  }
};
