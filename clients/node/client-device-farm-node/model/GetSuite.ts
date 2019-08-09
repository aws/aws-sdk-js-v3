import { GetSuiteInput } from "./GetSuiteInput";
import { GetSuiteOutput } from "./GetSuiteOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
