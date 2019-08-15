import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainController: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    DomainControllerId: {
      shape: {
        type: "string"
      }
    },
    DnsIpAddr: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    LaunchTime: {
      shape: {
        type: "timestamp"
      }
    },
    StatusLastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
