import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRouteResponseInput: _Structure_ = {
  type: "structure",
  required: ["RouteResponseId", "ApiId", "RouteId"],
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
    },
    RouteResponseId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "routeResponseId"
    }
  }
};
