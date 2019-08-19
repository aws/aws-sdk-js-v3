import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServerErrorException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorDetails: {
      shape: _ErrorDetails
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InternalServerErrorException"
};
