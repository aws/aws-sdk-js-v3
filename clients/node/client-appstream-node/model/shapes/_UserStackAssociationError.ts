import { _UserStackAssociation } from "./_UserStackAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserStackAssociationError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserStackAssociation: {
      shape: _UserStackAssociation
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
