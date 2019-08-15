import { ListSuitesInput } from "../shapes/ListSuitesInput";
import { ListSuitesOutput } from "../shapes/ListSuitesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSuites: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSuites",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSuitesInput
  },
  output: {
    shape: ListSuitesOutput
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
