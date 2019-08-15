import { GetFindingsInput } from "../shapes/GetFindingsInput";
import { GetFindingsOutput } from "../shapes/GetFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFindings",
  http: {
    method: "POST",
    requestUri: "/findings"
  },
  input: {
    shape: GetFindingsInput
  },
  output: {
    shape: GetFindingsOutput
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
