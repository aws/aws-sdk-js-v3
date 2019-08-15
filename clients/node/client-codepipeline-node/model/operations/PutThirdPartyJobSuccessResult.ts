import { PutThirdPartyJobSuccessResultInput } from "../shapes/PutThirdPartyJobSuccessResultInput";
import { PutThirdPartyJobSuccessResultOutput } from "../shapes/PutThirdPartyJobSuccessResultOutput";
import { ValidationException } from "../shapes/ValidationException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutThirdPartyJobSuccessResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutThirdPartyJobSuccessResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutThirdPartyJobSuccessResultInput
  },
  output: {
    shape: PutThirdPartyJobSuccessResultOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: InvalidJobStateException
    },
    {
      shape: InvalidClientTokenException
    }
  ]
};
