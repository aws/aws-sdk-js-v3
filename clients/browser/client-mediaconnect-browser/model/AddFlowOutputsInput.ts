import { ___listOfAddOutputRequest } from "./___listOfAddOutputRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddFlowOutputsInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "Outputs"],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    },
    Outputs: {
      shape: ___listOfAddOutputRequest,
      locationName: "outputs"
    }
  }
};
