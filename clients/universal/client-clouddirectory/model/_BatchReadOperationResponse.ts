import { _BatchReadSuccessfulResponse } from "./_BatchReadSuccessfulResponse";
import { _BatchReadException } from "./_BatchReadException";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchReadOperationResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulResponse: {
      shape: _BatchReadSuccessfulResponse
    },
    ExceptionResponse: {
      shape: _BatchReadException
    }
  }
};
