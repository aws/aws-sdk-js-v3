import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPartnerEventSourceAccountsInput: _Structure_ = {
  type: "structure",
  required: ["EventSourceName"],
  members: {
    EventSourceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
