import { UntagProjectInput } from "./UntagProjectInput";
import { UntagProjectOutput } from "./UntagProjectOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
