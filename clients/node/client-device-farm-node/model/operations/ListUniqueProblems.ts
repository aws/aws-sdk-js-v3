import { ListUniqueProblemsInput } from "../shapes/ListUniqueProblemsInput";
import { ListUniqueProblemsOutput } from "../shapes/ListUniqueProblemsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUniqueProblems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUniqueProblems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUniqueProblemsInput
  },
  output: {
    shape: ListUniqueProblemsOutput
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
