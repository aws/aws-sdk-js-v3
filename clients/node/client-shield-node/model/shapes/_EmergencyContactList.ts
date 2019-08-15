import { List as _List_ } from "@aws-sdk/types";
import { _EmergencyContact } from "./_EmergencyContact";

export const _EmergencyContactList: _List_ = {
  type: "list",
  member: {
    shape: _EmergencyContact
  }
};
