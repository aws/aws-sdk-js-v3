import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAllResourcePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
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
    }
  }
};
