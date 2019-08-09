import { ListRunsInput } from "./ListRunsInput";
import { ListRunsOutput } from "./ListRunsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
