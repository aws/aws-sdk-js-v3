import { _ReservedNode } from "./_ReservedNode";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptReservedNodeExchangeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExchangedReservedNode: {
      shape: _ReservedNode
    }
  }
};
