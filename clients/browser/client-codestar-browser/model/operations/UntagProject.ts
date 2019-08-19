import { UntagProjectInput } from "../shapes/UntagProjectInput";
import { UntagProjectOutput } from "../shapes/UntagProjectOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagProjectInput
  },
  output: {
    shape: UntagProjectOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
