import { _VirtualServiceSpec } from "./_VirtualServiceSpec";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualServiceInput: _Structure_ = {
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
    tags: {
      shape: _TagList
    },
    virtualServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
