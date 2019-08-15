import { _RouteModels } from "./_RouteModels";
import { _RouteParameters } from "./_RouteParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteResponseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    RouteResponseId: {
      shape: {
        type: "string"
      },
      locationName: "routeResponseId"
    },
    RouteResponseKey: {
      shape: {
        type: "string"
      },
      locationName: "routeResponseKey"
    }
  }
};
