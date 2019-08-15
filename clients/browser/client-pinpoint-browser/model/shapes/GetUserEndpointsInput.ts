import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserEndpointsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "UserId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "user-id"
    }
  }
};
