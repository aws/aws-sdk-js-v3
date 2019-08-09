import { GetProjectInput } from "./GetProjectInput";
import { GetProjectOutput } from "./GetProjectOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetProjectInput
  },
  output: {
    shape: GetProjectOutput
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
