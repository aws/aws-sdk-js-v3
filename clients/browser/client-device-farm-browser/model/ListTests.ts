import { ListTestsInput } from "./ListTestsInput";
import { ListTestsOutput } from "./ListTestsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
