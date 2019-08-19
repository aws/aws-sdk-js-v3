import { SendBonusInput } from "../shapes/SendBonusInput";
import { SendBonusOutput } from "../shapes/SendBonusOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendBonus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendBonus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendBonusInput
  },
  output: {
    shape: SendBonusOutput
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
