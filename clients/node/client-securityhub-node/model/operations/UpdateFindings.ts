import { UpdateFindingsInput } from "../shapes/UpdateFindingsInput";
import { UpdateFindingsOutput } from "../shapes/UpdateFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFindings",
  http: {
    method: "PATCH",
    requestUri: "/findings"
  },
  input: {
    shape: UpdateFindingsInput
  },
  output: {
    shape: UpdateFindingsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
