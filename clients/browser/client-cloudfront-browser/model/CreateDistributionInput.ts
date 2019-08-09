import { _DistributionConfig } from "./_DistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDistributionInput: _Structure_ = {
  type: "structure",
  required: ["DistributionConfig"],
  members: {
    DistributionConfig: {
      shape: _DistributionConfig,
      locationName: "DistributionConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "DistributionConfig"
};
