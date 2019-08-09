import { List as _List_ } from "@aws-sdk/types";
import { _AddressBookData } from "./_AddressBookData";

export const _AddressBookDataList: _List_ = {
  type: "list",
  member: {
    shape: _AddressBookData
  }
};
