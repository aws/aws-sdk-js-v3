import { _StreamingDistribution } from "./_StreamingDistribution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStreamingDistributionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamingDistribution: {
      shape: _StreamingDistribution
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "StreamingDistribution"
};
