import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPublicAccessBlockInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-account-id"
    }
  }
};
