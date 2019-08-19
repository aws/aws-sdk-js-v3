import { _StreamingDistributionConfig } from "./_StreamingDistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamingDistributionInput: _Structure_ = {
  type: "structure",
  required: ["StreamingDistributionConfig"],
  members: {
    StreamingDistributionConfig: {
      shape: _StreamingDistributionConfig,
      locationName: "StreamingDistributionConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "StreamingDistributionConfig"
};
