import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateServiceLastAccessedDetailsInput: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
