import { GetJobInput } from "../shapes/GetJobInput";
import { GetJobOutput } from "../shapes/GetJobOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobInput
  },
  output: {
    shape: GetJobOutput
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
