import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeSpecification: _Structure_ = {
  type: "structure",
  required: ["VolumeType", "SizeInGB"],
  members: {
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
    SizeInGB: {
      shape: {
        type: "integer"
      }
    }
  }
};
