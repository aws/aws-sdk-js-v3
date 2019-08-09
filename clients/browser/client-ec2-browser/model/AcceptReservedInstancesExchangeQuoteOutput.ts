import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptReservedInstancesExchangeQuoteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExchangeId: {
      shape: {
        type: "string"
      },
      locationName: "exchangeId"
    }
  }
};
