import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContactReachabilityStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
