import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSolutionVersionInput: _Structure_ = {
  type: "structure",
  required: ["solutionVersionArn"],
  members: {
    solutionVersionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
