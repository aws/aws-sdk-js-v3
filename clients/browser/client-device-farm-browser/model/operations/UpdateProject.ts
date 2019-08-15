import { UpdateProjectInput } from "../shapes/UpdateProjectInput";
import { UpdateProjectOutput } from "../shapes/UpdateProjectOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProjectInput
  },
  output: {
    shape: UpdateProjectOutput
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
    }
  ]
};
