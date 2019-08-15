import { GetEnabledStandardsInput } from "../shapes/GetEnabledStandardsInput";
import { GetEnabledStandardsOutput } from "../shapes/GetEnabledStandardsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEnabledStandards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEnabledStandards",
  http: {
    method: "POST",
    requestUri: "/standards/get"
  },
  input: {
    shape: GetEnabledStandardsInput
  },
  output: {
    shape: GetEnabledStandardsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    }
  ]
};
