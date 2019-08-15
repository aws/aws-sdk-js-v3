import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociatedTargetNetwork: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkId: {
      shape: {
        type: "string"
      },
      locationName: "networkId"
    },
    NetworkType: {
      shape: {
        type: "string"
      },
      locationName: "networkType"
    }
  }
};
