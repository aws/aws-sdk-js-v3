import { _RouteModels } from "./_RouteModels";
import { _RouteParameters } from "./_RouteParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteResponseInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "RouteId", "RouteResponseKey"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ModelSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "modelSelectionExpression"
    },
    ResponseModels: {
      shape: _RouteModels,
      locationName: "responseModels"
    },
    ResponseParameters: {
      shape: _RouteParameters,
      locationName: "responseParameters"
    },
    RouteId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "routeId"
    },
    RouteResponseKey: {
      shape: {
        type: "string"
      },
      locationName: "routeResponseKey"
    }
  }
};
