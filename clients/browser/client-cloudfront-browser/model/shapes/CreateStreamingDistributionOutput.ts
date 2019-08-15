import { _StreamingDistribution } from "./_StreamingDistribution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamingDistributionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamingDistribution: {
      shape: _StreamingDistribution
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
  payload: "StreamingDistribution"
};
