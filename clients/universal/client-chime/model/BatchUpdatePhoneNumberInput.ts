import { _UpdatePhoneNumberRequestItemList } from "./_UpdatePhoneNumberRequestItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdatePhoneNumberInput: _Structure_ = {
  type: "structure",
  required: ["UpdatePhoneNumberRequestItems"],
  members: {
    UpdatePhoneNumberRequestItems: {
      shape: _UpdatePhoneNumberRequestItemList
    }
  }
};
