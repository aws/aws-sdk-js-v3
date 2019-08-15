import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDedicatedIpWarmupAttributesInput: _Structure_ = {
  type: "structure",
  required: ["Ip", "WarmupPercentage"],
  members: {
    Ip: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "IP"
    },
    WarmupPercentage: {
      shape: {
        type: "integer"
      }
    }
  }
};
