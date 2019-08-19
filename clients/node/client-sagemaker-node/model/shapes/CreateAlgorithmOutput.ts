import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAlgorithmOutput: _Structure_ = {
  type: "structure",
  required: ["AlgorithmArn"],
  members: {
    AlgorithmArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
