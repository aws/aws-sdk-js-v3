import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PciId: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceId: {
      shape: {
        type: "string"
      }
    },
    VendorId: {
      shape: {
        type: "string"
      }
    },
    SubsystemId: {
      shape: {
        type: "string"
      }
    },
    SubsystemVendorId: {
      shape: {
        type: "string"
      }
    }
  }
};
