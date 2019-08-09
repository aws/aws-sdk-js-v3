import { _OriginationRouteList } from "./_OriginationRouteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Origination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Routes: {
      shape: _OriginationRouteList
    },
    Disabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
