import { GetProjectInput } from "../shapes/GetProjectInput";
import { GetProjectOutput } from "../shapes/GetProjectOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
