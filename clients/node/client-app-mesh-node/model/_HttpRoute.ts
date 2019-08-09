import { _HttpRouteAction } from "./_HttpRouteAction";
import { _HttpRouteMatch } from "./_HttpRouteMatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpRoute: _Structure_ = {
  type: "structure",
  required: ["action", "match"],
  members: {
    action: {
      shape: _HttpRouteAction
    },
    match: {
      shape: _HttpRouteMatch
    }
  }
};
