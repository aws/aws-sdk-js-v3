import { ListUniqueProblemsInput } from "./ListUniqueProblemsInput";
import { ListUniqueProblemsOutput } from "./ListUniqueProblemsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
