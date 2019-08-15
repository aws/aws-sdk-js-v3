import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserByPrincipalIdInput: _Structure_ = {
  type: "structure",
  required: ["PrincipalId", "AwsAccountId", "Namespace"],
  members: {
    PrincipalId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "PrincipalId"
    },
    AwsAccountId: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "AwsAccountId"
    },
    Namespace: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Namespace"
    }
  }
};
