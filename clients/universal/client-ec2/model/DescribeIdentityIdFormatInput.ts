import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityIdFormatInput: _Structure_ = {
  type: "structure",
  required: ["PrincipalArn"],
  members: {
    PrincipalArn: {
      shape: {
        type: "string"
      },
      locationName: "principalArn"
    },
    Resource: {
      shape: {
        type: "string"
      },
      locationName: "resource"
    }
  }
};
