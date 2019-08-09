import { _Invalidation } from "./_Invalidation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInvalidationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Invalidation: {
      shape: _Invalidation
    }
  },
  payload: "Invalidation"
};
