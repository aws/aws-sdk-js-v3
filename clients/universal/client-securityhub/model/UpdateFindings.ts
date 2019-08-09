import { UpdateFindingsInput } from "./UpdateFindingsInput";
import { UpdateFindingsOutput } from "./UpdateFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
