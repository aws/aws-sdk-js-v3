import { _ResourceMetadata } from "./_ResourceMetadata";
import { _VirtualServiceSpec } from "./_VirtualServiceSpec";
import { _VirtualServiceStatus } from "./_VirtualServiceStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualServiceData: _Structure_ = {
  type: "structure",
  required: ["meshName", "metadata", "spec", "status", "virtualServiceName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    metadata: {
      shape: _ResourceMetadata
    },
    spec: {
      shape: _VirtualServiceSpec
    },
    status: {
      shape: _VirtualServiceStatus
    },
    virtualServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
