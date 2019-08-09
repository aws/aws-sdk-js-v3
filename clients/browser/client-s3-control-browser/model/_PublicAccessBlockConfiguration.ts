import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicAccessBlockConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlockPublicAcls: {
      shape: {
        type: "boolean"
      },
      locationName: "BlockPublicAcls"
    },
    IgnorePublicAcls: {
      shape: {
        type: "boolean"
      },
      locationName: "IgnorePublicAcls"
    },
    BlockPublicPolicy: {
      shape: {
        type: "boolean"
      },
      locationName: "BlockPublicPolicy"
    },
    RestrictPublicBuckets: {
      shape: {
        type: "boolean"
      },
      locationName: "RestrictPublicBuckets"
    }
  }
};
