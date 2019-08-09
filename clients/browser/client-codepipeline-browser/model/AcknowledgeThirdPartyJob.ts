import { AcknowledgeThirdPartyJobInput } from "./AcknowledgeThirdPartyJobInput";
import { AcknowledgeThirdPartyJobOutput } from "./AcknowledgeThirdPartyJobOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNonceException } from "./InvalidNonceException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
