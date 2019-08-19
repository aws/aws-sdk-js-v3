import { _TunnelOptionsList } from "./_TunnelOptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnConnectionOptionsSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StaticRoutesOnly: {
      shape: {
        type: "boolean"
      },
      locationName: "staticRoutesOnly"
    },
    TunnelOptions: {
      shape: _TunnelOptionsList
    }
  }
};
