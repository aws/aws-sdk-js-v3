import { _AssociationDescription } from "./_AssociationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAssociationStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationDescription: {
      shape: _AssociationDescription
    }
  }
};
