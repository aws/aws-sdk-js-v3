import { GetSuiteInput } from "../shapes/GetSuiteInput";
import { GetSuiteOutput } from "../shapes/GetSuiteOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSuite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSuite",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSuiteInput
  },
  output: {
    shape: GetSuiteOutput
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
