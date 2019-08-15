import { _IamInstanceProfileAssociation } from "./_IamInstanceProfileAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateIamInstanceProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamInstanceProfileAssociation: {
      shape: _IamInstanceProfileAssociation,
      locationName: "iamInstanceProfileAssociation"
    }
  }
};
