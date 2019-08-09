import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyIdentityIdFormatInput: _Structure_ = {
  type: "structure",
  required: ["PrincipalArn", "Resource", "UseLongIds"],
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
    },
    UseLongIds: {
      shape: {
        type: "boolean"
      },
      locationName: "useLongIds"
    }
  }
};
