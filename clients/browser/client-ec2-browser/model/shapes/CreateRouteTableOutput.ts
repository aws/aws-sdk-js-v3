import { _RouteTable } from "./_RouteTable";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RouteTable: {
      shape: _RouteTable,
      locationName: "routeTable"
    }
  }
};
