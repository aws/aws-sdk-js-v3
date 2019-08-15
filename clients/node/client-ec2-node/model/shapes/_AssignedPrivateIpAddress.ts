import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssignedPrivateIpAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    }
  }
};
