import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachDiskInput: _Structure_ = {
  type: "structure",
  required: ["diskName", "instanceName", "diskPath"],
  members: {
    diskName: {
      shape: {
        type: "string"
      }
    },
    instanceName: {
      shape: {
        type: "string"
      }
    },
    diskPath: {
      shape: {
        type: "string"
      }
    }
  }
};
