import { CreateProgressUpdateStreamInput } from "../shapes/CreateProgressUpdateStreamInput";
import { CreateProgressUpdateStreamOutput } from "../shapes/CreateProgressUpdateStreamOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DryRunOperation } from "../shapes/DryRunOperation";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProgressUpdateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProgressUpdateStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProgressUpdateStreamInput
  },
  output: {
    shape: CreateProgressUpdateStreamOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: DryRunOperation
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: InvalidInputException
    }
  ]
};
