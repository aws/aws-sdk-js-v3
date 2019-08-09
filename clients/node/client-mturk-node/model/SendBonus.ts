import { SendBonusInput } from "./SendBonusInput";
import { SendBonusOutput } from "./SendBonusOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
