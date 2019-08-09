import { CreateProgressUpdateStreamInput } from "./CreateProgressUpdateStreamInput";
import { CreateProgressUpdateStreamOutput } from "./CreateProgressUpdateStreamOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
