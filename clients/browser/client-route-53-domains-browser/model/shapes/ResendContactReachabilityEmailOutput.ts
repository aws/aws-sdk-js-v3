import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResendContactReachabilityEmailOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    emailAddress: {
      shape: {
        type: "string"
      }
    },
    isAlreadyVerified: {
      shape: {
        type: "boolean"
      }
    }
  }
};
