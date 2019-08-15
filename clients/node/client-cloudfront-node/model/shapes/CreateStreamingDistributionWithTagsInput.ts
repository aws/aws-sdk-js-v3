import { _StreamingDistributionConfigWithTags } from "./_StreamingDistributionConfigWithTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamingDistributionWithTagsInput: _Structure_ = {
  type: "structure",
  required: ["StreamingDistributionConfigWithTags"],
  members: {
    StreamingDistributionConfigWithTags: {
      shape: _StreamingDistributionConfigWithTags,
      locationName: "StreamingDistributionConfigWithTags",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "StreamingDistributionConfigWithTags"
};
