import { _IpSets } from "./_IpSets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Accelerator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceleratorArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    IpAddressType: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    IpSets: {
      shape: _IpSets
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
