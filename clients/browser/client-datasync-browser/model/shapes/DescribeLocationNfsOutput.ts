import { _OnPremConfig } from "./_OnPremConfig";
import { _NfsMountOptions } from "./_NfsMountOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLocationNfsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LocationArn: {
      shape: {
        type: "string"
      }
    },
    LocationUri: {
      shape: {
        type: "string"
      }
    },
    OnPremConfig: {
      shape: _OnPremConfig
    },
    MountOptions: {
      shape: _NfsMountOptions
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
