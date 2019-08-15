import { GetThirdPartyJobDetailsInput } from "../shapes/GetThirdPartyJobDetailsInput";
import { GetThirdPartyJobDetailsOutput } from "../shapes/GetThirdPartyJobDetailsOutput";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidJobException } from "../shapes/InvalidJobException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetThirdPartyJobDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetThirdPartyJobDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetThirdPartyJobDetailsInput
  },
  output: {
    shape: GetThirdPartyJobDetailsOutput
  },
  errors: [
    {
      shape: JobNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidClientTokenException
    },
    {
      shape: InvalidJobException
    }
  ]
};
