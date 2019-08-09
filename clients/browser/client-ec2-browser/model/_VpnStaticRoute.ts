import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnStaticRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidrBlock"
    },
    Source: {
      shape: {
        type: "string"
      },
      locationName: "source"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
