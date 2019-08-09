import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDedicatedIpPoolInput: _Structure_ = {
  type: "structure",
  required: ["PoolName"],
  members: {
    PoolName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "PoolName"
    }
  }
};
