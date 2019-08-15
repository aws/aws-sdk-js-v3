import { ListRunsInput } from "../shapes/ListRunsInput";
import { ListRunsOutput } from "../shapes/ListRunsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRunsInput
  },
  output: {
    shape: ListRunsOutput
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
