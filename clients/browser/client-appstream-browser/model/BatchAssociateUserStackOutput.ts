import { _UserStackAssociationErrorList } from "./_UserStackAssociationErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchAssociateUserStackOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errors: {
      shape: _UserStackAssociationErrorList
    }
  }
};
