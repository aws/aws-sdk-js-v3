import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualServiceInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "virtualServiceName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
    },
    virtualServiceName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "virtualServiceName"
    }
  }
};
