import { CreateProjectInput } from "./CreateProjectInput";
import { CreateProjectOutput } from "./CreateProjectOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { TagOperationException } from "./TagOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProjectInput
  },
  output: {
    shape: CreateProjectOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    },
    {
      shape: TagOperationException
    }
  ]
};
