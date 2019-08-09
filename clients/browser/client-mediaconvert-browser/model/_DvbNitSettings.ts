import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DvbNitSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkId: {
      shape: {
        type: "integer"
      },
      locationName: "networkId"
    },
    NetworkName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "networkName"
    },
    NitInterval: {
      shape: {
        type: "integer",
        min: 25
      },
      locationName: "nitInterval"
    }
  }
};
