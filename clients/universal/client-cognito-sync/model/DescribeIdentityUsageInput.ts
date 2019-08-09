import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityUsageInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "IdentityId"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityId"
    }
  }
};
