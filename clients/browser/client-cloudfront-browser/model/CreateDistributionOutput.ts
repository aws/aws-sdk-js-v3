import { _Distribution } from "./_Distribution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDistributionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Distribution: {
      shape: _Distribution
    },
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "Distribution"
};
