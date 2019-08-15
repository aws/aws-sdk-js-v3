import { AcknowledgeJobInput } from "../shapes/AcknowledgeJobInput";
import { AcknowledgeJobOutput } from "../shapes/AcknowledgeJobOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNonceException } from "../shapes/InvalidNonceException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
