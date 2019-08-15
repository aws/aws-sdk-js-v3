import { _RouteData } from "./_RouteData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRouteOutput: _Structure_ = {
  type: "structure",
  required: ["route"],
  members: {
    route: {
      shape: _RouteData
    }
  },
  payload: "route"
};
