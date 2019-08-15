import { ListTestsInput } from "../shapes/ListTestsInput";
import { ListTestsOutput } from "../shapes/ListTestsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTestsInput
  },
  output: {
    shape: ListTestsOutput
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
