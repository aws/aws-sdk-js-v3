import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserPoolDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFrontDomain: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
