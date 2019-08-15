import { _InstanceStatus } from "./_InstanceStatus";
import { _EbsVolumeList } from "./_EbsVolumeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Ec2InstanceId: {
      shape: {
        type: "string"
      }
    },
    PublicDnsName: {
      shape: {
        type: "string"
      }
    },
    PublicIpAddress: {
      shape: {
        type: "string"
      }
    },
    PrivateDnsName: {
      shape: {
        type: "string"
      }
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: _InstanceStatus
    },
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    },
    InstanceFleetId: {
      shape: {
        type: "string"
      }
    },
    Market: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EbsVolumes: {
      shape: _EbsVolumeList
    }
  }
};
