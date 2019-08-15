import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Volume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    Ec2VolumeId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    RaidArrayId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    Device: {
      shape: {
        type: "string"
      }
    },
    MountPoint: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
