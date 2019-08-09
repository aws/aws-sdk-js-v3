import { ___listOfOutput } from "./___listOfOutput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddFlowOutputsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Outputs: {
      shape: ___listOfOutput,
      locationName: "outputs"
    }
  }
};
