import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMountTargetInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId", "SubnetId"],
  members: {
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
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
