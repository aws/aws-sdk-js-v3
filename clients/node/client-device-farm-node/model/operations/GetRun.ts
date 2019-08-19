import { GetRunInput } from "../shapes/GetRunInput";
import { GetRunOutput } from "../shapes/GetRunOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
