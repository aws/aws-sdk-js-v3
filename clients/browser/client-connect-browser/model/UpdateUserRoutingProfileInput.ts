import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserRoutingProfileInput: _Structure_ = {
  type: "structure",
  required: ["RoutingProfileId", "UserId", "InstanceId"],
  members: {
    RoutingProfileId: {
      shape: {
        type: "string"
      }
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "UserId"
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};
