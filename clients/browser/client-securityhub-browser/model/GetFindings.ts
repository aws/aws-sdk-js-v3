import { GetFindingsInput } from "./GetFindingsInput";
import { GetFindingsOutput } from "./GetFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
