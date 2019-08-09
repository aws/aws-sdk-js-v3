import { TagProjectInput } from "./TagProjectInput";
import { TagProjectOutput } from "./TagProjectOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagProjectInput
  },
  output: {
    shape: TagProjectOutput
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
