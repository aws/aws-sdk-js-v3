import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDedicatedIpInPoolInput: _Structure_ = {
  type: "structure",
  required: ["Ip", "DestinationPoolName"],
  members: {
    Ip: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "IP"
    },
    DestinationPoolName: {
      shape: {
        type: "string"
      }
    }
  }
};
