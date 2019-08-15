import { _UserStackAssociationList } from "./_UserStackAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchAssociateUserStackInput: _Structure_ = {
  type: "structure",
  required: ["UserStackAssociations"],
  members: {
    UserStackAssociations: {
      shape: _UserStackAssociationList
    }
  }
};
