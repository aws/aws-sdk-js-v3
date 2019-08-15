import { AcknowledgeThirdPartyJobInput } from "../shapes/AcknowledgeThirdPartyJobInput";
import { AcknowledgeThirdPartyJobOutput } from "../shapes/AcknowledgeThirdPartyJobOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNonceException } from "../shapes/InvalidNonceException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcknowledgeThirdPartyJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcknowledgeThirdPartyJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcknowledgeThirdPartyJobInput
  },
  output: {
    shape: AcknowledgeThirdPartyJobOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidNonceException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: InvalidClientTokenException
    }
  ]
};
