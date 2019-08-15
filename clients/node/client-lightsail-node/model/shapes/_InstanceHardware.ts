import { _DiskList } from "./_DiskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceHardware: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cpuCount: {
      shape: {
        type: "integer"
      }
    },
    disks: {
      shape: _DiskList
    },
    ramSizeInGb: {
      shape: {
        type: "float"
      }
    }
  }
};
