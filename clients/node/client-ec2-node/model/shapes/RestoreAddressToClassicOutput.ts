import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreAddressToClassicOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
