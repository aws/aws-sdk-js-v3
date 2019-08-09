import { _TcpRouteAction } from "./_TcpRouteAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TcpRoute: _Structure_ = {
  type: "structure",
  required: ["action"],
  members: {
    action: {
      shape: _TcpRouteAction
    }
  }
};
