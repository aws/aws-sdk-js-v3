import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateIamInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    }
  }
};
