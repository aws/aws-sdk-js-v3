import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
