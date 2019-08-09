import { GetJobInput } from "./GetJobInput";
import { GetJobOutput } from "./GetJobOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
