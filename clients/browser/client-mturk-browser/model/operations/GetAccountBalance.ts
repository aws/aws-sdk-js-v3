import { GetAccountBalanceInput } from "../shapes/GetAccountBalanceInput";
import { GetAccountBalanceOutput } from "../shapes/GetAccountBalanceOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccountBalance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountBalance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountBalanceInput
  },
  output: {
    shape: GetAccountBalanceOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
