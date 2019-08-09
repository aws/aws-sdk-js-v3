import { ___listOfInput } from "./___listOfInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInputsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Inputs: {
      shape: ___listOfInput,
      locationName: "inputs"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
