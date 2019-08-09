import { GetTestInput } from "./GetTestInput";
import { GetTestOutput } from "./GetTestOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTestInput
  },
  output: {
    shape: GetTestOutput
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
