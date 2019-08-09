import { Structure as _Structure_ } from "@aws-sdk/types";

export const DataAlreadyAcceptedException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    expectedSequenceToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "DataAlreadyAcceptedException"
};
