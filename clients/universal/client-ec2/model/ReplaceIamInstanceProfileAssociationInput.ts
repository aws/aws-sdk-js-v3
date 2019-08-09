import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceIamInstanceProfileAssociationInput: _Structure_ = {
  type: "structure",
  required: ["IamInstanceProfile", "AssociationId"],
  members: {
    IamInstanceProfile: {
      shape: _IamInstanceProfileSpecification
    },
    AssociationId: {
      shape: {
        type: "string"
      }
    }
  }
};
