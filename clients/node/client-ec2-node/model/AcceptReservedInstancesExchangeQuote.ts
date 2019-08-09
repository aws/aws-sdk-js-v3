import { AcceptReservedInstancesExchangeQuoteInput } from "./AcceptReservedInstancesExchangeQuoteInput";
import { AcceptReservedInstancesExchangeQuoteOutput } from "./AcceptReservedInstancesExchangeQuoteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptReservedInstancesExchangeQuote: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptReservedInstancesExchangeQuote",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptReservedInstancesExchangeQuoteInput
  },
  output: {
    shape: AcceptReservedInstancesExchangeQuoteOutput
  },
  errors: []
};
