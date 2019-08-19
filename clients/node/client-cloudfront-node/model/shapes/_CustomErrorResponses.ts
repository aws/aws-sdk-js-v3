import { _CustomErrorResponseList } from "./_CustomErrorResponseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomErrorResponses: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _CustomErrorResponseList
    }
  }
};
