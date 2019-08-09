import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpAddressResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubnetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Ip: {
      shape: {
        type: "string",
        min: 7
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ModificationTime: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
