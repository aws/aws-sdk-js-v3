import { _RouteList } from "./_RouteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRoutesOutput: _Structure_ = {
  type: "structure",
  required: ["routes"],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    routes: {
      shape: _RouteList
    }
  }
};
