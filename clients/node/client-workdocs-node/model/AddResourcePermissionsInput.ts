import { _SharePrincipalList } from "./_SharePrincipalList";
import { _NotificationOptions } from "./_NotificationOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddResourcePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "Principals"],
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
    Principals: {
      shape: _SharePrincipalList
    },
    NotificationOptions: {
      shape: _NotificationOptions
    }
  }
};
