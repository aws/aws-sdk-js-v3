import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMountTargetOutput: _Structure_ = {
  type: "structure",
  required: ["MountTargetId", "FileSystemId", "SubnetId", "LifeCycleState"],
  members: {
    OwnerId: {
      shape: {
        type: "string"
      }
    },
    MountTargetId: {
      shape: {
        type: "string"
      }
    },
    FileSystemId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    LifeCycleState: {
      shape: {
        type: "string"
      }
    },
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    }
  }
};
