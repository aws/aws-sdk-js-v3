import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLayersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    LayerIds: {
      shape: _Strings
    }
  }
};
