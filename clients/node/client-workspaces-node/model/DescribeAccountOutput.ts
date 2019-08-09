import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DedicatedTenancySupport: {
      shape: {
        type: "string"
      }
    },
    DedicatedTenancyManagementCidrRange: {
      shape: {
        type: "string"
      }
    }
  }
};
