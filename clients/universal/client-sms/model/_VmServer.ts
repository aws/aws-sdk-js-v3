import { _VmServerAddress } from "./_VmServerAddress";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VmServer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vmServerAddress: {
      shape: _VmServerAddress
    },
    vmName: {
      shape: {
        type: "string"
      }
    },
    vmManagerName: {
      shape: {
        type: "string"
      }
    },
    vmManagerType: {
      shape: {
        type: "string"
      }
    },
    vmPath: {
      shape: {
        type: "string"
      }
    }
  }
};
