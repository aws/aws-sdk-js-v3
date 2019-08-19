import { _StreamingDistributionConfig } from "./_StreamingDistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStreamingDistributionInput: _Structure_ = {
  type: "structure",
  required: ["StreamingDistributionConfig", "Id"],
  members: {
    StreamingDistributionConfig: {
      shape: _StreamingDistributionConfig,
      locationName: "StreamingDistributionConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    IfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "If-Match"
    }
  },
  payload: "StreamingDistributionConfig"
};
