import { PutJobFailureResultInput } from "./PutJobFailureResultInput";
import { PutJobFailureResultOutput } from "./PutJobFailureResultOutput";
import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
