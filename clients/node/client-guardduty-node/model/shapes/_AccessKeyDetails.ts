import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessKeyDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessKeyId: {
      shape: {
        type: "string"
      },
      locationName: "accessKeyId"
    },
    PrincipalId: {
      shape: {
        type: "string"
      },
      locationName: "principalId"
    },
    UserName: {
      shape: {
        type: "string"
      },
      locationName: "userName"
    },
    UserType: {
      shape: {
        type: "string"
      },
      locationName: "userType"
    }
  }
};
