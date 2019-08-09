import { _Invalidation } from "./_Invalidation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInvalidationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    },
    Invalidation: {
      shape: _Invalidation
    }
  },
  payload: "Invalidation"
};
