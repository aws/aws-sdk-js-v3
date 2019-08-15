import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThirdPartyJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clientId: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string"
      }
    }
  }
};
