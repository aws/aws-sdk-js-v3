import { RebootInstanceInput } from "./RebootInstanceInput";
import { RebootInstanceOutput } from "./RebootInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebootInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootInstanceInput
  },
  output: {
    shape: RebootInstanceOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
