import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetThirdPartyJobDetailsInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "clientToken"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    clientToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
