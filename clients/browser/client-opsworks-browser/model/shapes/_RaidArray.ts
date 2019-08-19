import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RaidArray: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    Name: {
      shape: {
        type: "string"
      }
    },
    RaidLevel: {
      shape: {
        type: "integer"
      }
    },
    NumberOfDisks: {
      shape: {
        type: "integer"
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
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    StackId: {
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
    }
  }
};
