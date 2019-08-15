import { _Output } from "./_Output";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowOutputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Output: {
      shape: _Output,
      locationName: "output"
    }
  }
};
