import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectivityInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostAddress: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Metadata: {
      shape: {
        type: "string"
      }
    },
    PortNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
