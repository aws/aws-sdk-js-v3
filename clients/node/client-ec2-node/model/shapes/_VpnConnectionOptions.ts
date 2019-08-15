import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnConnectionOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StaticRoutesOnly: {
      shape: {
        type: "boolean"
      },
      locationName: "staticRoutesOnly"
    }
  }
};
