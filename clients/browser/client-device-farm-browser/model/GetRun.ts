import { GetRunInput } from "./GetRunInput";
import { GetRunOutput } from "./GetRunOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRunInput
  },
  output: {
    shape: GetRunOutput
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
