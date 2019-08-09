import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicIpv4PoolRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FirstAddress: {
      shape: {
        type: "string"
      },
      locationName: "firstAddress"
    },
    LastAddress: {
      shape: {
        type: "string"
      },
      locationName: "lastAddress"
    },
    AddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "addressCount"
    },
    AvailableAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "availableAddressCount"
    }
  }
};
