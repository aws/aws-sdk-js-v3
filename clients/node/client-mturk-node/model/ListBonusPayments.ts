import { ListBonusPaymentsInput } from "./ListBonusPaymentsInput";
import { ListBonusPaymentsOutput } from "./ListBonusPaymentsOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
