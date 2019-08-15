import { _StatusCodeList } from "./_StatusCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StatusCodes: _Structure_ = {
  type: "structure",
  required: ["Quantity", "Items"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _StatusCodeList
    }
  }
};
