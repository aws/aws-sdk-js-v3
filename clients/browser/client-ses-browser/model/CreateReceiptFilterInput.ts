import { _ReceiptFilter } from "./_ReceiptFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReceiptFilterInput: _Structure_ = {
  type: "structure",
  required: ["Filter"],
  members: {
    Filter: {
      shape: _ReceiptFilter
    }
  }
};
