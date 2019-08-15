import { ListBonusPaymentsInput } from "../shapes/ListBonusPaymentsInput";
import { ListBonusPaymentsOutput } from "../shapes/ListBonusPaymentsOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBonusPayments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBonusPayments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBonusPaymentsInput
  },
  output: {
    shape: ListBonusPaymentsOutput
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
