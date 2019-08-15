import { PutJobFailureResultInput } from "../shapes/PutJobFailureResultInput";
import { PutJobFailureResultOutput } from "../shapes/PutJobFailureResultOutput";
import { ValidationException } from "../shapes/ValidationException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutJobFailureResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutJobFailureResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutJobFailureResultInput
  },
  output: {
    shape: PutJobFailureResultOutput
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
    }
  ]
};
