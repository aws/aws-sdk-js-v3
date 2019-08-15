import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpRouteInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    CidrIp: {
      shape: {
        type: "string"
      }
    },
    IpRouteStatusMsg: {
      shape: {
        type: "string"
      }
    },
    AddedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    IpRouteStatusReason: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
