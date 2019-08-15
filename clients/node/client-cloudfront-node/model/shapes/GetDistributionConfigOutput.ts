import { _DistributionConfig } from "./_DistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDistributionConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DistributionConfig: {
      shape: _DistributionConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "DistributionConfig"
};
