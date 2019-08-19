import { _ResourceArns } from "./_ResourceArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterThingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificatePem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceArns: {
      shape: _ResourceArns
    }
  }
};
