import { _StreamingDistributionConfig } from "./_StreamingDistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStreamingDistributionConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamingDistributionConfig: {
      shape: _StreamingDistributionConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "StreamingDistributionConfig"
};
