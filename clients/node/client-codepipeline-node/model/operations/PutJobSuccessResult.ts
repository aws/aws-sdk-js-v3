import { PutJobSuccessResultInput } from "../shapes/PutJobSuccessResultInput";
import { PutJobSuccessResultOutput } from "../shapes/PutJobSuccessResultOutput";
import { ValidationException } from "../shapes/ValidationException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutJobSuccessResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutJobSuccessResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutJobSuccessResultInput
  },
  output: {
    shape: PutJobSuccessResultOutput
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
