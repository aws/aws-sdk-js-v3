import { PutThirdPartyJobSuccessResultInput } from "./PutThirdPartyJobSuccessResultInput";
import { PutThirdPartyJobSuccessResultOutput } from "./PutThirdPartyJobSuccessResultOutput";
import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
