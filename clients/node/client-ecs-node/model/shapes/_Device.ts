import { _DeviceCgroupPermissions } from "./_DeviceCgroupPermissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Device: _Structure_ = {
  type: "structure",
  required: ["hostPath"],
  members: {
    hostPath: {
      shape: {
        type: "string"
      }
    },
    containerPath: {
      shape: {
        type: "string"
      }
    },
    permissions: {
      shape: _DeviceCgroupPermissions
    }
  }
};
