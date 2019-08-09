import { _AssociationStatus } from "./_AssociationStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAssociationStatusInput: _Structure_ = {
  type: "structure",
  required: ["Name", "InstanceId", "AssociationStatus"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    AssociationStatus: {
      shape: _AssociationStatus
    }
  }
};
