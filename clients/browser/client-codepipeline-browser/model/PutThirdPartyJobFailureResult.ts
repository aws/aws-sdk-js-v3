import { PutThirdPartyJobFailureResultInput } from "./PutThirdPartyJobFailureResultInput";
import { PutThirdPartyJobFailureResultOutput } from "./PutThirdPartyJobFailureResultOutput";
import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
