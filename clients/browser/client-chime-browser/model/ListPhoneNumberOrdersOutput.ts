import { _PhoneNumberOrderList } from "./_PhoneNumberOrderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPhoneNumberOrdersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberOrders: {
      shape: _PhoneNumberOrderList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
