import { _PolicyParameterList } from "./_PolicyParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReviewPolicy: _Structure_ = {
  type: "structure",
  required: ["PolicyName"],
  members: {
    PolicyName: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _PolicyParameterList
    }
  }
};
