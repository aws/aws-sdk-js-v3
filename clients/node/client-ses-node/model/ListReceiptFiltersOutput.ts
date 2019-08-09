import { _ReceiptFilterList } from "./_ReceiptFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReceiptFiltersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _ReceiptFilterList
    }
  }
};
