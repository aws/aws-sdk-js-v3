import { PutThirdPartyJobFailureResultInput } from "../shapes/PutThirdPartyJobFailureResultInput";
import { PutThirdPartyJobFailureResultOutput } from "../shapes/PutThirdPartyJobFailureResultOutput";
import { ValidationException } from "../shapes/ValidationException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutThirdPartyJobFailureResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutThirdPartyJobFailureResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutThirdPartyJobFailureResultInput
  },
  output: {
    shape: PutThirdPartyJobFailureResultOutput
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
