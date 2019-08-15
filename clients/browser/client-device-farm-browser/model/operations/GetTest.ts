import { GetTestInput } from "../shapes/GetTestInput";
import { GetTestOutput } from "../shapes/GetTestOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
