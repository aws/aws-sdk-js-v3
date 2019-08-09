import { List as _List_ } from "@aws-sdk/types";
import { _PhoneNumberAssociation } from "./_PhoneNumberAssociation";

export const _PhoneNumberAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _PhoneNumberAssociation
  }
};
