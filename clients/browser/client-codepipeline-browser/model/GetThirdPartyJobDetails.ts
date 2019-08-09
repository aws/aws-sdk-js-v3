import { GetThirdPartyJobDetailsInput } from "./GetThirdPartyJobDetailsInput";
import { GetThirdPartyJobDetailsOutput } from "./GetThirdPartyJobDetailsOutput";
import { JobNotFoundException } from "./JobNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidJobException } from "./InvalidJobException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
