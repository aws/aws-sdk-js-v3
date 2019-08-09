import { GetEnabledStandardsInput } from "./GetEnabledStandardsInput";
import { GetEnabledStandardsOutput } from "./GetEnabledStandardsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
