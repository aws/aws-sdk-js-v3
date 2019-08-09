import { AcknowledgeJobInput } from "./AcknowledgeJobInput";
import { AcknowledgeJobOutput } from "./AcknowledgeJobOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNonceException } from "./InvalidNonceException";
import { JobNotFoundException } from "./JobNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcknowledgeJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcknowledgeJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcknowledgeJobInput
  },
  output: {
    shape: AcknowledgeJobOutput
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
    }
  ]
};
