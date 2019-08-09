import { NotifyApplicationStateInput } from "./NotifyApplicationStateInput";
import { NotifyApplicationStateOutput } from "./NotifyApplicationStateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyErrorException } from "./PolicyErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const NotifyApplicationState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "NotifyApplicationState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: NotifyApplicationStateInput
  },
  output: {
    shape: NotifyApplicationStateOutput
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
    },
    {
      shape: PolicyErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
