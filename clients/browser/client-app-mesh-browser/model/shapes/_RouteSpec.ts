import { _HttpRoute } from "./_HttpRoute";
import { _TcpRoute } from "./_TcpRoute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteSpec: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    httpRoute: {
      shape: _HttpRoute
    },
    tcpRoute: {
      shape: _TcpRoute
    }
  }
};
