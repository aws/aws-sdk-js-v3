import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AllowedPrincipal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrincipalType: {
      shape: {
        type: "string"
      },
      locationName: "principalType"
    },
    Principal: {
      shape: {
        type: "string"
      },
      locationName: "principal"
    }
  }
};
