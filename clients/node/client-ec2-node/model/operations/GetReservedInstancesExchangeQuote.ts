import { GetReservedInstancesExchangeQuoteInput } from "../shapes/GetReservedInstancesExchangeQuoteInput";
import { GetReservedInstancesExchangeQuoteOutput } from "../shapes/GetReservedInstancesExchangeQuoteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetReservedInstancesExchangeQuote: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReservedInstancesExchangeQuote",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReservedInstancesExchangeQuoteInput
  },
  output: {
    shape: GetReservedInstancesExchangeQuoteOutput
  },
  errors: []
};
