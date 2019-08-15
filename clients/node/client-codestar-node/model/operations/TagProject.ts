import { TagProjectInput } from "../shapes/TagProjectInput";
import { TagProjectOutput } from "../shapes/TagProjectOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
