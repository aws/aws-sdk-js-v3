import { _Get } from "./_Get";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransactGetItem: _Structure_ = {
  type: "structure",
  required: ["Get"],
  members: {
    Get: {
      shape: _Get
    }
  }
};
