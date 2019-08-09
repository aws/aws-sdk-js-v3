import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrivateIpAddressSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Primary: {
      shape: {
        type: "boolean"
      },
      locationName: "primary"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    }
  }
};
