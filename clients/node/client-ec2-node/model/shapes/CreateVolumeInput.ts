import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVolumeInput: _Structure_ = {
  type: "structure",
  required: ["AvailabilityZone"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    }
  }
};
