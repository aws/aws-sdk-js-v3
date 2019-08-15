import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveResourcePermissionInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "PrincipalId"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ResourceId"
    },
    PrincipalId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "PrincipalId"
    },
    PrincipalType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "type"
    }
  }
};
