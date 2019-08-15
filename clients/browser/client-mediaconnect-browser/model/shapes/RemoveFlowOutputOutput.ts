import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveFlowOutputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    OutputArn: {
      shape: {
        type: "string"
      },
      locationName: "outputArn"
    }
  }
};
