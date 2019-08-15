import { GetJobDetailsInput } from "../shapes/GetJobDetailsInput";
import { GetJobDetailsOutput } from "../shapes/GetJobDetailsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobDetailsInput
  },
  output: {
    shape: GetJobDetailsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: JobNotFoundException
    }
  ]
};
