import { _VirtualServiceSpec } from "./_VirtualServiceSpec";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVirtualServiceInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "spec", "virtualServiceName"],
  members: {
    clientToken: {
      shape: {
        type: "string"
      }
    },
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
    },
    spec: {
      shape: _VirtualServiceSpec
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
