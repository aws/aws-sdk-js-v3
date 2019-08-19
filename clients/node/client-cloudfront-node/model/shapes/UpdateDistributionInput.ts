import { _DistributionConfig } from "./_DistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDistributionInput: _Structure_ = {
  type: "structure",
  required: ["DistributionConfig", "Id"],
  members: {
    DistributionConfig: {
      shape: _DistributionConfig,
      locationName: "DistributionConfig",
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
  payload: "DistributionConfig"
};
