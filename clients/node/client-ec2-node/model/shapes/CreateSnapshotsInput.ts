import { _InstanceSpecification } from "./_InstanceSpecification";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotsInput: _Structure_ = {
  type: "structure",
  required: ["InstanceSpecification"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    InstanceSpecification: {
      shape: _InstanceSpecification
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    CopyTagsFromSource: {
      shape: {
        type: "string"
      }
    }
  }
};
