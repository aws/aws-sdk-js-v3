import { List as _List_ } from "@aws-sdk/types";
import { _IamInstanceProfileAssociation } from "./_IamInstanceProfileAssociation";

export const _IamInstanceProfileAssociationSet: _List_ = {
  type: "list",
  member: {
    shape: _IamInstanceProfileAssociation,
    locationName: "item"
  }
};
