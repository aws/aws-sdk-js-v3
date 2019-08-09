import { _InvalidationBatch } from "./_InvalidationBatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInvalidationInput: _Structure_ = {
  type: "structure",
  required: ["DistributionId", "InvalidationBatch"],
  members: {
    DistributionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DistributionId"
    },
    InvalidationBatch: {
      shape: _InvalidationBatch,
      locationName: "InvalidationBatch",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "InvalidationBatch"
};
