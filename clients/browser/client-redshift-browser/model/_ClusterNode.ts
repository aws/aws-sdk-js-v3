import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterNode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeRole: {
      shape: {
        type: "string"
      }
    },
    PrivateIPAddress: {
      shape: {
        type: "string"
      }
    },
    PublicIPAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
