import { _DistributionConfigWithTags } from "./_DistributionConfigWithTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDistributionWithTagsInput: _Structure_ = {
  type: "structure",
  required: ["DistributionConfigWithTags"],
  members: {
    DistributionConfigWithTags: {
      shape: _DistributionConfigWithTags,
      locationName: "DistributionConfigWithTags",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "DistributionConfigWithTags"
};
