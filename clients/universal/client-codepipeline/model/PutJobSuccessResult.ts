import { PutJobSuccessResultInput } from "./PutJobSuccessResultInput";
import { PutJobSuccessResultOutput } from "./PutJobSuccessResultOutput";
import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
