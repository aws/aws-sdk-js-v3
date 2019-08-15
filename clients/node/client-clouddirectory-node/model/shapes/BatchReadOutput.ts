import { _BatchReadOperationResponseList } from "./_BatchReadOperationResponseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchReadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Responses: {
      shape: _BatchReadOperationResponseList
    }
  }
};
