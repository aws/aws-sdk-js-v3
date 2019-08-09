import { _AssociationIdList } from "./_AssociationIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartAssociationsOnceInput: _Structure_ = {
  type: "structure",
  required: ["AssociationIds"],
  members: {
    AssociationIds: {
      shape: _AssociationIdList
    }
  }
};
