import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRouteInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "RouteId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    RouteId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "routeId"
    }
  }
};
