import { _Source } from "./_Source";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowSourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Source: {
      shape: _Source,
      locationName: "source"
    }
  }
};
