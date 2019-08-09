import { ListSuitesInput } from "./ListSuitesInput";
import { ListSuitesOutput } from "./ListSuitesOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
