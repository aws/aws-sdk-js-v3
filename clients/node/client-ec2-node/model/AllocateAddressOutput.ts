import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateAddressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    },
    AllocationId: {
      shape: {
        type: "string"
      },
      locationName: "allocationId"
    },
    PublicIpv4Pool: {
      shape: {
        type: "string"
      },
      locationName: "publicIpv4Pool"
    },
    Domain: {
      shape: {
        type: "string"
      },
      locationName: "domain"
    }
  }
};
