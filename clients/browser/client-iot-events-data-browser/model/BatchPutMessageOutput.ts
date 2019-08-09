import { _BatchPutMessageErrorEntries } from "./_BatchPutMessageErrorEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchPutMessageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BatchPutMessageErrorEntries: {
      shape: _BatchPutMessageErrorEntries
    }
  }
};
