import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "AvailabilityZone"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    IpAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
