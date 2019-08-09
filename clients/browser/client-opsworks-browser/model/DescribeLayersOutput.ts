import { _Layers } from "./_Layers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLayersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Layers: {
      shape: _Layers
    }
  }
};
