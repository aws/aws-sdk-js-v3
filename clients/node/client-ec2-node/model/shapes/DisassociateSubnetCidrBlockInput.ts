import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateSubnetCidrBlockInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    }
  }
};
