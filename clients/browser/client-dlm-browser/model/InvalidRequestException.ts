import { _ParameterList } from "./_ParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidRequestException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Code: {
      shape: {
        type: "string"
      }
    },
    RequiredParameters: {
      shape: _ParameterList
    },
    MutuallyExclusiveParameters: {
      shape: _ParameterList
    }
  },
  exceptionType: "InvalidRequestException"
};
