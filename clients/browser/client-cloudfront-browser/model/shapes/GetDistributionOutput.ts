import { _Distribution } from "./_Distribution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDistributionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Distribution: {
      shape: _Distribution
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
